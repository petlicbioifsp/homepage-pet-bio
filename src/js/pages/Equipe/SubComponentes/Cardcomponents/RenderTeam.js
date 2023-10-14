"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMembers = void 0;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("../Cards/Card"));
var Cards_module_css_1 = __importDefault(require("../Cards/Cards.module.css"));
var renderMembers = function (arrMembers, customClassCard, customCardSize) {
    var renderMembers = function (arrMember) { return (react_1.default.createElement("div", { className: Cards_module_css_1.default[customClassCard] },
        react_1.default.createElement(Card_1.default, { customClass: customCardSize, key: arrMember.id, nome: arrMember.nome, srcFoto: arrMember.srcFoto, tipo: arrMember.tipo, ano: arrMember.ano, github: arrMember.github, linkedin: arrMember.linkedin }))); };
    var Members = arrMembers.map(renderMembers);
    return Members;
};
exports.renderMembers = renderMembers;
