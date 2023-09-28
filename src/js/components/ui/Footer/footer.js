"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fa_1 = require("react-icons/fa");
var footer_module_css_1 = __importDefault(require("./footer.module.css"));
var react_1 = __importDefault(require("react"));
function Footer() {
    return (react_1.default.createElement("footer", { className: footer_module_css_1.default.footer },
        react_1.default.createElement("a", { className: footer_module_css_1.default.gitIcon, href: 'https://github.com/pet-ads', rel: "noreferrer", target: "_blank" },
            react_1.default.createElement(fa_1.FaGithub, null)),
        react_1.default.createElement("pre", { className: footer_module_css_1.default.footer_content },
            "Desenvolvido com \u2665 por",
            react_1.default.createElement("a", { className: footer_module_css_1.default.link, href: '/' }, " PET/ADS"),
            " @",
            react_1.default.createElement("a", { className: footer_module_css_1.default.link, href: 'https://scl.ifsp.edu.br', rel: 'noreferrer', target: '_blank' }, "IFSP S\u00E3o Carlos."))));
}
exports.default = Footer;
