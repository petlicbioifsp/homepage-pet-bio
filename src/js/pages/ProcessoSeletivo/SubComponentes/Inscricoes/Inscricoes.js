"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Inscricoes_module_css_1 = __importDefault(require("./Inscricoes.module.css"));
var ai_1 = require("react-icons/ai");
var Constants_1 = require("../Constants/Constants");
function Inscricoes(_a) {
    var title = _a.title, introducao = _a.introducao, email = _a.email, prazo = _a.prazo, data = _a.data, estado = _a.estado, detalhes = _a.detalhes;
    return (react_1.default.createElement("div", { className: Inscricoes_module_css_1.default.Inscricao },
        react_1.default.createElement("h2", { className: Inscricoes_module_css_1.default.titulo }, title),
        react_1.default.createElement("p", { className: Inscricoes_module_css_1.default.texto },
            introducao,
            " ",
            react_1.default.createElement("a", { className: Inscricoes_module_css_1.default.email, href: Constants_1.sendMail }, email),
            "."),
        react_1.default.createElement("p", { className: Inscricoes_module_css_1.default.texto },
            prazo,
            " ",
            react_1.default.createElement("span", { className: Inscricoes_module_css_1.default.encerrado }, data),
            " ",
            estado),
        react_1.default.createElement("p", { className: Inscricoes_module_css_1.default.texto },
            detalhes,
            " "),
        react_1.default.createElement("p", { className: Inscricoes_module_css_1.default.download },
            react_1.default.createElement("a", { href: Constants_1.drive, rel: "noreferrer", target: "_blank" },
                react_1.default.createElement(ai_1.AiOutlineCloudDownload, { className: Inscricoes_module_css_1.default.btnDownload })))));
}
exports.default = Inscricoes;
