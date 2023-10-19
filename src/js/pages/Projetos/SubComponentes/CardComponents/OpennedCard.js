"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LogoConteiner_1 = __importDefault(require("./LogoConteiner"));
var OpennedContent_1 = __importDefault(require("./OpennedContent"));
var ai_1 = require("react-icons/ai");
function OpennedCard(_a) {
    var toggleIsOpen = _a.toggleIsOpen, tipo = _a.tipo, status = _a.status, link = _a.link, titulo = _a.titulo, expandido = _a.expandido, tecnologias = _a.tecnologias;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(LogoConteiner_1.default, { tipo: tipo, link: link, logoConteinerClass: "logoConteinerClosed", iconClass: "icon-aberto" }),
        react_1.default.createElement(ai_1.AiFillCloseCircle, { className: "closeButton", onClick: toggleIsOpen }),
        react_1.default.createElement(OpennedContent_1.default, { titulo: titulo, status: status, expandido: expandido, tecnologias: tecnologias })));
}
exports.default = OpennedCard;
