"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
var json_schema_to_typescript_1 = require("json-schema-to-typescript");
var fs = require('fs');
var fetch = require('node-fetch');
var getData = {
    byId: function (origin, token, id) {
        return fetch("https://" + origin + "/api/interface/get?token=" + token + "&id=" + id).then(function (res) { return res.json(); }).then(function (res) {
            if (!res.data)
                throw new Error('something wrong with your token or id');
            else
                return res.data;
        });
    },
};
var generate = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var types_dest, api_id, schema_name, token, types_config, origin, apiSource, types, outputypes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                types_dest = config.types_dest, api_id = config.api_id, schema_name = config.schema_name, token = config.token, types_config = config.types_config, origin = config.origin;
                return [4 /*yield*/, getData.byId(origin, token, api_id)];
            case 1:
                apiSource = _a.sent();
                return [4 /*yield*/, json_schema_to_typescript_1.compile(JSON.parse(apiSource.res_body), schema_name || 'Schema', {
                        bannerComment: ''
                    })];
            case 2:
                types = _a.sent();
                outputypes = typesProcessor(types, types_config);
                console.log(outputypes);
                fs.writeFileSync(process.cwd() + types_dest, outputypes);
                return [2 /*return*/];
        }
    });
}); };
exports.generate = generate;
/**
 *  定制处理输出的ts ，比如将List 类修改为对应的实体
 * @param types
 * @param config
 * @returns
 */
var typesProcessor = function (types, config) {
    if (config.list_entity_name) {
        types = types.replace(/List/g, config.list_entity_name);
    }
    return types;
};
//# sourceMappingURL=index.js.map