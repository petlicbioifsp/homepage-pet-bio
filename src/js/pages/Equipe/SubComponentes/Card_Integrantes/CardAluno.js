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
var CardAluno_module_css_1 = __importDefault(require("./CardAluno.module.css"));
var fa_1 = require("react-icons/fa");
var EquipeTypes_1 = require("../../../../types/EquipeTypes");
function CardAluno(_a) {
    var nome = _a.nome, srcFoto = _a.srcFoto, tipo = _a.tipo, github = _a.github, linkedin = _a.linkedin;
    var _b = (0, react_1.useState)(EquipeTypes_1.noBlurStyle), blurred = _b[0], setBlur = _b[1]; // Inicializado com o estilo 'NoBlur'
    var altFoto = "Foto de ".concat(nome, ", integrante do PET ADS do IFSP Sao Carlos");
    return (react_1.default.createElement("div", { className: CardAluno_module_css_1.default.card },
        react_1.default.createElement("div", { className: CardAluno_module_css_1.default.imgContainer, onMouseEnter: function () { return setBlur(EquipeTypes_1.withBlurStyle); }, onMouseLeave: function () { return setBlur(EquipeTypes_1.noBlurStyle); } },
            react_1.default.createElement("img", { style: blurred, className: CardAluno_module_css_1.default.img, src: srcFoto, alt: altFoto }),
            react_1.default.createElement("div", { className: CardAluno_module_css_1.default.iconWrapper },
                react_1.default.createElement("a", { href: github, target: '_blank', rel: 'noopener noreferrer' },
                    react_1.default.createElement("span", { className: CardAluno_module_css_1.default.githubIcon },
                        react_1.default.createElement(fa_1.FaGithub, null))),
                react_1.default.createElement("a", { href: linkedin, target: '_blank', rel: 'noopener noreferrer' },
                    react_1.default.createElement("span", { className: CardAluno_module_css_1.default.linkedinIcon },
                        react_1.default.createElement(fa_1.FaLinkedin, null))))),
        react_1.default.createElement("div", { className: CardAluno_module_css_1.default.descricao },
            react_1.default.createElement("strong", null,
                react_1.default.createElement("p", { className: CardAluno_module_css_1.default.p }, nome)),
            react_1.default.createElement("pre", null),
            react_1.default.createElement("strong", null,
                react_1.default.createElement("p", { className: CardAluno_module_css_1.default.p }, tipo)))));
}
exports.default = CardAluno;
