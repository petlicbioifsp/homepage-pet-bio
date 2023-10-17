"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderProjetos = void 0;
var react_1 = __importDefault(require("react"));
var cardProjeto_1 = __importDefault(require("../CardProjeto/cardProjeto"));
var renderProjetos = function (arrProjetos) {
    return arrProjetos.map(function (projeto) { return (react_1.default.createElement(cardProjeto_1.default, { key: projeto.id, titulo: projeto.titulo, status: projeto.status, tipo: projeto.tipo, link: projeto.link, descricao: projeto.descricao, expandido: projeto.expandido, tecnologias: projeto.tecnologias })); });
};
exports.renderProjetos = renderProjetos;
