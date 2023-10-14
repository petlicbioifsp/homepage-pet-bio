"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ProcessoSeletivo_module_css_1 = __importDefault(require("./ProcessoSeletivo.module.css"));
var Cabecalho_1 = __importDefault(require("./SubComponentes/Cabecalho/Cabecalho"));
var Requisitos_1 = __importDefault(require("./SubComponentes/Requisitos/Requisitos"));
var Inscricoes_1 = __importDefault(require("./SubComponentes/Inscricoes/Inscricoes"));
var menuNavegacao_1 = __importDefault(require("../../components/menus/MenuNavegacao/menuNavegacao"));
var Constants_1 = require("./SubComponentes/Constants/Constants");
function ProcessoSeletivo() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(menuNavegacao_1.default, null),
        react_1.default.createElement("div", { className: ProcessoSeletivo_module_css_1.default.corpo },
            react_1.default.createElement(Cabecalho_1.default, { title: "Processo Seletivo", content: Constants_1.processoSeletivoContent }),
            react_1.default.createElement("section", { className: ProcessoSeletivo_module_css_1.default["corpo_informacoes"] },
                react_1.default.createElement(Requisitos_1.default, { title: "Requisitos", introducao: Constants_1.requisitosContent.introducao, item_1: Constants_1.requisitosContent.item_1, item_2: Constants_1.requisitosContent.item_2 }),
                react_1.default.createElement(Inscricoes_1.default, { title: "Inscri\u00E7\u00F5es", introducao: Constants_1.inscricoesContent.introducao, email: Constants_1.inscricoesContent.email, prazo: Constants_1.inscricoesContent.prazo, data: Constants_1.inscricoesContent.data, estado: Constants_1.inscricoesContent.estado, detalhes: Constants_1.inscricoesContent.detalhes })))));
}
exports.default = ProcessoSeletivo;
