"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./cardProjeto.css");
var framer_motion_1 = require("framer-motion");
var react_1 = __importStar(require("react"));
var ClosedCard_1 = __importDefault(require("../CardComponents/ClosedCard"));
var OpennedCard_1 = __importDefault(require("../CardComponents/OpennedCard"));
function CardProjeto(_a) {
    var titulo = _a.titulo, tipo = _a.tipo, descricao = _a.descricao, expandido = _a.expandido, link = _a.link, status = _a.status, tecnologias = _a.tecnologias;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggleIsOpen = function () { setIsOpen(!isOpen); };
    return (react_1.default.createElement(react_1.default.Fragment, null, !isOpen ? (react_1.default.createElement(framer_motion_1.motion.div, { className: isOpen ? "card aberto" : "card fechado", onClick: toggleIsOpen },
        react_1.default.createElement(ClosedCard_1.default, { tipo: tipo, link: link, titulo: titulo, descricao: descricao }))) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "card_background", onClick: toggleIsOpen }),
        react_1.default.createElement(framer_motion_1.motion.div, { className: isOpen ? "card aberto" : "card fechado" },
            react_1.default.createElement(OpennedCard_1.default, { tipo: tipo, link: link, titulo: titulo, status: status, expandido: expandido, tecnologias: tecnologias, toggleIsOpen: toggleIsOpen }))))));
}
exports.default = CardProjeto;
