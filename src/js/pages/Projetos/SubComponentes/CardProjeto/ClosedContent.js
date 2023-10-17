"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
require("./cardProjeto.css");
function ClosedContent(_a) {
    var titulo = _a.titulo, descricao = _a.descricao;
    return (react_1.default.createElement(framer_motion_1.motion.div, null,
        react_1.default.createElement(framer_motion_1.motion.h2, { className: "card-titulo" }, titulo),
        react_1.default.createElement(framer_motion_1.motion.p, { className: "card-descricao" }, descricao)));
}
exports.default = ClosedContent;
