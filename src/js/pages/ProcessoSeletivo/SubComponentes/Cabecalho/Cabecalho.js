"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var header_1 = __importDefault(require("../../../../components/ui/Header/header"));
var Cabecalho_module_css_1 = __importDefault(require("./Cabecalho.module.css"));
function Cabecalho(_a) {
    var title = _a.title, content = _a.content;
    return (react_1.default.createElement("div", { className: Cabecalho_module_css_1.default.cabecalho },
        react_1.default.createElement(header_1.default, { texto: title }),
        react_1.default.createElement("p", { className: Cabecalho_module_css_1.default.texto }, content)));
}
exports.default = Cabecalho;
