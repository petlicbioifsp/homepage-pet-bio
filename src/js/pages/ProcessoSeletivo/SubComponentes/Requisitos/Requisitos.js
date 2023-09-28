"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Requisitos_module_css_1 = __importDefault(require("./Requisitos.module.css"));
function Requisitos(_a) {
    var titulo = _a.titulo, texto = _a.texto, item_1 = _a.item_1, item_2 = _a.item_2;
    return (react_1.default.createElement("div", { className: Requisitos_module_css_1.default.requisitos },
        react_1.default.createElement("h2", { className: Requisitos_module_css_1.default.titulo_secundario }, titulo),
        react_1.default.createElement("p", { className: Requisitos_module_css_1.default.texto }, texto),
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", { className: Requisitos_module_css_1.default.texto }, item_1),
            react_1.default.createElement("li", { className: Requisitos_module_css_1.default.texto },
                item_2,
                " "))));
}
exports.default = Requisitos;
