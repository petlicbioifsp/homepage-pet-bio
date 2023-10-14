"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Title_1 = __importDefault(require("../Home_title/Title"));
var HeaderConteiner_module_css_1 = __importDefault(require("./HeaderConteiner.module.css"));
function HeaderConteiner() {
    var content = "Programa de Educação Tutorial";
    var title = "Bem-vindo à página do PET/ADS @ IFSP";
    return (react_1.default.createElement("div", { className: HeaderConteiner_module_css_1.default.headerConteiner },
        react_1.default.createElement(Title_1.default, { title: title, content: content })));
}
exports.default = HeaderConteiner;
