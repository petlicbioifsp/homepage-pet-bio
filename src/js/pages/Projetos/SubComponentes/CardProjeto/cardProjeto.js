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
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
var ai_1 = require("react-icons/ai");
var Logo_1 = __importDefault(require("../Logo"));
var ClosedContent_1 = __importDefault(require("./ClosedContent"));
var OpennedContent_1 = __importDefault(require("./OpennedContent"));
function CardProjeto(props) {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    function toggleIsOpen() {
        setIsOpen(!isOpen);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !isOpen && (react_1.default.createElement(framer_motion_1.motion.div, { className: isOpen ? "card aberto" : "card fechado", onClick: toggleIsOpen },
            react_1.default.createElement(Logo_1.default, { tipo: props.tipo, link: props.link, logoConteinerClass: "logoConteinerOpenned", iconClass: "Icon" }),
            react_1.default.createElement(ClosedContent_1.default, { titulo: props.titulo, descricao: props.descricao }))),
        isOpen && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "card_background", onClick: function () { return setIsOpen(!isOpen); } }),
            react_1.default.createElement(framer_motion_1.motion.div, { className: isOpen ? "card aberto" : "card fechado" },
                react_1.default.createElement(Logo_1.default, { tipo: props.tipo, link: props.link, logoConteinerClass: "logoConteinerClosed", iconClass: "icon-aberto" }),
                react_1.default.createElement(ai_1.AiFillCloseCircle, { className: "closeButton", onClick: toggleIsOpen }),
                react_1.default.createElement(OpennedContent_1.default, { titulo: props.titulo, status: props.status, expandido: props.expandido, tecnologias: props.tecnologias }))))));
}
exports.default = CardProjeto;
