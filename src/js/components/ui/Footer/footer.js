"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var footer_module_css_1 = __importDefault(require("./footer.module.css"));
var fa_1 = require("react-icons/fa");
var FooterLink_1 = __importDefault(require("./SubComponents/FooterLink"));
function footer() {
    return (react_1.default.createElement("footer", { className: footer_module_css_1.default.footer },
        react_1.default.createElement(FooterLink_1.default, { className: footer_module_css_1.default.gitIcon, href: 'https://github.com/pet-ads', title: 'Visite nosso github', rel: 'noreferrer', target: '_blank' },
            react_1.default.createElement(fa_1.FaGithub, null)),
        react_1.default.createElement("pre", { className: footer_module_css_1.default.footer_content },
            "Desenvolvido com \u2665 por",
            ' ',
            react_1.default.createElement(FooterLink_1.default, { href: '/', title: 'P\u00E1gina inicial' }, "PET/ADS"),
            ' ',
            "@",
            ' ',
            react_1.default.createElement(FooterLink_1.default, { href: 'https://scl.ifsp.edu.br', title: 'P\u00E1gina do IFSP-SCL', rel: 'noreferrer', target: '_blank' }, "IFSP S\u00E3o Carlos."))));
}
exports.default = footer;
