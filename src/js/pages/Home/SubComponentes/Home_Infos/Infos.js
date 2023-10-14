"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Infos_module_css_1 = __importDefault(require("./Infos.module.css"));
function Informations(_a) {
    var title = _a.title, content = _a.content;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h3", { className: Infos_module_css_1.default.title }, title),
        react_1.default.createElement("p", { className: Infos_module_css_1.default.text }, content)));
}
exports.default = Informations;
