"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ai_1 = require("react-icons/ai");
var Inscricoes_module_css_1 = __importDefault(require("./Inscricoes.module.css"));
var react_1 = __importDefault(require("react"));
function Inscricoes(_a) {
    var titulo = _a.titulo, texto_1 = _a.texto_1, email = _a.email, texto_2 = _a.texto_2, data = _a.data, estado = _a.estado, texto_3 = _a.texto_3;
    return (react_1.default.createElement("div", { className: Inscricoes_module_css_1.default.Inscricao },
        react_1.default.createElement("h2", { className: Inscricoes_module_css_1.default.titulo }, titulo),
        react_1.default.createElement("p", { className: Inscricoes_module_css_1.default.texto },
            texto_1,
            " ",
            react_1.default.createElement("a", { className: Inscricoes_module_css_1.default.email, href: "mailto:pet.ads.scl@ifsp.edu.br?subject=Processo seletivo PET/ADS" }, email),
            "."),
        react_1.default.createElement("p", { className: Inscricoes_module_css_1.default.texto },
            texto_2,
            " ",
            react_1.default.createElement("span", { className: Inscricoes_module_css_1.default.encerrado }, data),
            " ",
            estado),
        react_1.default.createElement("p", { className: Inscricoes_module_css_1.default.texto },
            texto_3,
            " "),
        react_1.default.createElement("p", { className: Inscricoes_module_css_1.default.download },
            react_1.default.createElement("a", { href: ' https://drive.google.com/file/d/1mRjpnZ5xrETw9uUEJDPvhFZNyDVl8Gv3/view', rel: 'noreferrer', target: '_blank' },
                react_1.default.createElement(ai_1.AiOutlineCloudDownload, { className: Inscricoes_module_css_1.default.btnDownload })))));
}
exports.default = Inscricoes;
