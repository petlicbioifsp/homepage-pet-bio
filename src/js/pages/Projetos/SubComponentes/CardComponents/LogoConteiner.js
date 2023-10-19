"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var md_1 = require("react-icons/md");
var fa_1 = require("react-icons/fa");
function LogoConteiner(_a) {
    var tipo = _a.tipo, link = _a.link, logoConteinerClass = _a.logoConteinerClass, iconClass = _a.iconClass;
    return (react_1.default.createElement(framer_motion_1.motion.div, { className: logoConteinerClass },
        tipo === "ensino" && react_1.default.createElement(fa_1.FaGraduationCap, { className: "logo-projeto" }),
        tipo === "pesquisa" && react_1.default.createElement(fa_1.FaSearch, { className: "logo-projeto" }),
        tipo === "extensão" && react_1.default.createElement(md_1.MdExtension, { className: "logo-projeto" }),
        tipo === "extensão-desenvolivmento" && react_1.default.createElement(md_1.MdOutlineComputer, { className: "logo-projeto" }),
        react_1.default.createElement(framer_motion_1.motion.a, { rel: "noopener noreferrer", target: "_blank", href: link },
            react_1.default.createElement(fa_1.FaGithub, { className: iconClass }))));
}
exports.default = LogoConteiner;
