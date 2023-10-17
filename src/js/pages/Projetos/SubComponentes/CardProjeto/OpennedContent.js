"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
function OpennedContent(_a) {
    var titulo = _a.titulo, status = _a.status, expandido = _a.expandido, tecnologias = _a.tecnologias;
    return (react_1.default.createElement(framer_motion_1.motion.div, null,
        react_1.default.createElement(framer_motion_1.motion.h2, { className: "card-titulo" },
            titulo,
            " \u2192 ",
            status),
        react_1.default.createElement(framer_motion_1.motion.div, { className: "scrowSpace" },
            react_1.default.createElement("p", { className: "card--texto__expandido" }, expandido),
            react_1.default.createElement("div", { className: "card--texto__envolvidos" },
                react_1.default.createElement("p", { className: "card--texto__expandido" },
                    tecnologias,
                    " "),
                react_1.default.createElement("p", { className: "card--texto__expandido" })))));
}
exports.default = OpennedContent;
