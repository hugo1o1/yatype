import { type } from 'os';
import { ListFormat } from 'typescript';
import { Api, APIConfig, ApiGroup, TypesConfig } from '../types/api'

import { compile } from 'json-schema-to-typescript'

const fs = require('fs')
const fetch = require('node-fetch');

const getData = {
    byId: (origin: string, token: string, id: number): Promise<Api> =>
        fetch(`https://${origin}/api/interface/get?token=${token}&id=${id}`).then((res: any) => res.json()).then((res: any) => {
            if (!res.data) throw new Error('something wrong with your token or id')
            else return res.data
        }),

}


export const generate = async (config: APIConfig) => {
    const { types_dest, api_id, schema_name, token, types_config, origin } = config
    const apiSource = await getData.byId(origin, token, api_id)
    const types = await compile(JSON.parse(apiSource.res_body), schema_name || 'Schema', {
        bannerComment: ''
    })

    const outputypes = typesProcessor(types, types_config)
    console.log(outputypes);

    fs.writeFileSync(process.cwd() + types_dest, outputypes)
}


/**
 *  定制处理输出的ts ，比如将List 类修改为对应的实体
 * @param types  
 * @param config  
 * @returns 
 */
const typesProcessor = (types: string, config: TypesConfig) => {
    if (config.list_entity_name) {
        types = types.replace(/List/g, config.list_entity_name)
    }
    return types
}

