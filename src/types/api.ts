export interface APIConfig {
    origin: string,
    token: string,
    api_id: number,
    schema_name: string,
    types_dest: string,
    types_config: TypesConfig,

}

export interface res_body {

}

export interface TypesConfig {
    list_entity_name: string
}

export interface ApiGroup {
    index: number;
    name: string;
    desc: null | string;
    add_time: number;
    up_time: number;
    list: Api[];
}
export interface Api {
    query_path: QueryPath;
    edit_uid: number;
    status: Status;
    type: Type;
    req_body_is_json_schema: boolean;
    res_body_is_json_schema: boolean;
    api_opened: boolean;
    index: number;
    tag: string[];
    _id: number;
    method: Method;
    title: string;
    path: string;
    req_params: Req[];
    req_body_form: any[];
    req_headers: ReqHeader[];
    req_query: Req[];
    req_body_type?: BodyType;
    res_body_type: BodyType;
    res_body: string;
    req_body_other?: string;
    project_id: number;
    catid: number;
    uid: number;
    add_time: number;
    up_time: number;
    __v: number;
    desc?: string;
    markdown?: string;
}

export interface QueryPath {
    path: string;
    params: any[];
}

export enum Method {
    Get = "GET",
    Post = "POST",
}
export enum BodyType {
    JSON = "json",
}
export interface ReqHeader {
    required: string;
    _id: string;
    name: Name;
    value: Value;
}

export enum Name {
    ContentType = "Content-Type",
}

export enum Value {
    ApplicationJSON = "application/json",
}
export interface Req {
    _id: string;
    name: string;
    desc: string;
    required?: string;
}

export enum Status {
    Undone = "undone",
}

export enum Type {
    Static = "static",
    Var = "var",
}


export interface ApiCodeTemplate {
    method: Method,
    title: string,
    functionName?: string,
    SchemaName: string,
    path: string,
    pathVars?: { [name: string]: string }
    queryParams: QueryParam[]
}

export interface QueryParam {
    required: string;
    _id: string;
    name: string;
    desc: string;
}
