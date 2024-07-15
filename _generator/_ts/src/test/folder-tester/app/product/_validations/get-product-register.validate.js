"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parameters = void 0;
require("reflect-metadata");
//<REQUEST TYPES>
var Params = /** @class */ (function () {
    function Params() {
    }
    return Params;
}());
;
var Query = /** @class */ (function () {
    function Query() {
    }
    return Query;
}());
;
var Body = /** @class */ (function () {
    function Body() {
    }
    return Body;
}());
;
var ResponseBody = /** @class */ (function () {
    function ResponseBody() {
    }
    return ResponseBody;
}());
;
//BODY TO SEND:
var body = {};
exports.parameters = { Params: Params, Query: Query, Body: Body };
