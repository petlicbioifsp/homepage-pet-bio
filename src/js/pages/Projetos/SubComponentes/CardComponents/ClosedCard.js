"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ClosedContent_1 = __importDefault(require("./ClosedContent"));
var LogoConteiner_1 = __importDefault(require("./LogoConteiner"));
function ClosedCard(_a) {
    var tipo = _a.tipo, link = _a.link, titulo = _a.titulo, descricao = _a.descricao;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(LogoConteiner_1.default, { tipo: tipo, link: link, logoConteinerClass: "logoConteinerOpenned", iconClass: "Icon" }),
        react_1.default.createElement(ClosedContent_1.default, { titulo: titulo, descricao: descricao })));
}
exports.default = ClosedCard;
