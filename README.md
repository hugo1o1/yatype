#yapilink

```
yarn add yapitype -g

yapitype api init

yapitype api generate
```

###### options

```json
{
  "origin": "", // yapi 对应的域名
  "token": "bla", // token
  "api_id": 80146, // 对应的api id
  "types_dest": "/src/data/index.ts", // 生成类型路径
  "schema_name": "", //
  "types_config": {
    "list_entity_name": "Channel" // 如果是list 接口的item 类型名
  }
}
```
