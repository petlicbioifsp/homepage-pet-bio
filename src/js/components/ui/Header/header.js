"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./header.css");
function Header(_a) {
    var texto = _a.texto;
    return (react_1.default.createElement("h1", { className: "titulo" }, texto));
}
;
exports.default = Header;
