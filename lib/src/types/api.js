"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = exports.Status = exports.Value = exports.Name = exports.BodyType = exports.Method = void 0;
var Method;
(function (Method) {
    Method["Get"] = "GET";
    Method["Post"] = "POST";
})(Method = exports.Method || (exports.Method = {}));
var BodyType;
(function (BodyType) {
    BodyType["JSON"] = "json";
})(BodyType = exports.BodyType || (exports.BodyType = {}));
var Name;
(function (Name) {
    Name["ContentType"] = "Content-Type";
})(Name = exports.Name || (exports.Name = {}));
var Value;
(function (Value) {
    Value["ApplicationJSON"] = "application/json";
})(Value = exports.Value || (exports.Value = {}));
var Status;
(function (Status) {
    Status["Undone"] = "undone";
})(Status = exports.Status || (exports.Status = {}));
var Type;
(function (Type) {
    Type["Static"] = "static";
    Type["Var"] = "var";
})(Type = exports.Type || (exports.Type = {}));
//# sourceMappingURL=api.js.map