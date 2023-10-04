"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var header_module_css_1 = __importDefault(require("./header.module.css"));
var react_1 = __importDefault(require("react"));
function Header(_a) {
    var texto = _a.texto;
    return (react_1.default.createElement("h1", { className: header_module_css_1.default.titulo }, texto));
}
;
exports.default = Header;
