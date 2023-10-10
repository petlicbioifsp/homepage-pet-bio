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
var CardIntegrantes_module_css_1 = __importDefault(require("./CardIntegrantes.module.css"));
var Link_1 = __importDefault(require("../../../../components/interactive/Link/Link"));
var EquipeTypes_1 = require("../../../../types/EquipeTypes");
var fa_1 = require("react-icons/fa");
function CardImage(_a) {
    var srcFoto = _a.srcFoto, altFoto = _a.altFoto, github = _a.github, linkedin = _a.linkedin;
    var _b = (0, react_1.useState)(EquipeTypes_1.noBlurStyle), blurred = _b[0], setBlur = _b[1];
    var handleMouseEnter = function () {
        setBlur(EquipeTypes_1.withBlurStyle);
    };
    var handleMouseLeave = function () {
        setBlur(EquipeTypes_1.noBlurStyle);
    };
    return (react_1.default.createElement("div", { className: CardIntegrantes_module_css_1.default.imgContainer, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        react_1.default.createElement("img", { style: blurred, className: CardIntegrantes_module_css_1.default.img, src: srcFoto, alt: altFoto }),
        react_1.default.createElement("div", { className: CardIntegrantes_module_css_1.default.iconWrapper },
            react_1.default.createElement(Link_1.default, { href: github, target: '_blank', rel: 'noopener noreferrer' },
                react_1.default.createElement("span", { className: CardIntegrantes_module_css_1.default.githubIcon },
                    react_1.default.createElement(fa_1.FaGithub, null))),
            react_1.default.createElement(Link_1.default, { href: linkedin, target: '_blank', rel: 'noopener noreferrer' },
                react_1.default.createElement("span", { className: CardIntegrantes_module_css_1.default.linkedinIcon },
                    react_1.default.createElement(fa_1.FaLinkedin, null))))));
}
exports.default = CardImage;
