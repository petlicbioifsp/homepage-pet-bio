"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useBlur_1 = __importDefault(require("../../../../hooks/style/useBlur"));
var fa_1 = require("react-icons/fa");
var CardIntegrantes_module_css_1 = __importDefault(require("../Cards/CardIntegrantes.module.css"));
var Link_1 = __importDefault(require("../../../../components/interactive/Link/Link"));
function CardImage(_a) {
    var customClass = _a.customClass, srcFoto = _a.srcFoto, altFoto = _a.altFoto, github = _a.github, linkedin = _a.linkedin;
    var _b = (0, useBlur_1.default)(), blurred = _b.blurred, handleMouseEnter = _b.handleMouseEnter, handleMouseLeave = _b.handleMouseLeave;
    return (react_1.default.createElement("div", { className: CardIntegrantes_module_css_1.default[customClass], onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
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
