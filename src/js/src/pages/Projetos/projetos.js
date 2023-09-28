"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./projetos.css");
var react_1 = __importDefault(require("react"));
var header_1 = __importDefault(require("../../components/ui/Header/header"));
var useIsMobile_1 = __importDefault(require("../../hooks/window/useIsMobile"));
var useFetchProjetos_1 = __importDefault(require("../../hooks/fetch/useFetchProjetos"));
var cardProjeto_1 = __importDefault(require("./SubComponentes/CardProjeto/cardProjeto"));
var menuNavegacao_1 = __importDefault(require("../../components/menus/MenuNavegacao/menuNavegacao"));
function Projetos() {
    var isMobile = (0, useIsMobile_1.default)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(menuNavegacao_1.default, null),
        react_1.default.createElement("div", { className: "menu-projetos--corpo" },
            react_1.default.createElement(header_1.default, { texto: isMobile ? "Projetos do PET/ADS" : "Projetos Desenvolvidos pelo PET/ADS" }),
            react_1.default.createElement("section", { className: "menu-projetos" },
                react_1.default.createElement(useFetchProjetos_1.default, { render: function (arrProjetos) {
                        return arrProjetos.map(function (projeto) { return (react_1.default.createElement(cardProjeto_1.default, { key: projeto.id, titulo: projeto.titulo, status: projeto.status, tipo: projeto.tipo, link: projeto.link, descricao: projeto.descricao, expandido: projeto.expandido, tecnologias: projeto.tecnologias })); });
                    } })))));
}
exports.default = Projetos;
