"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Title_module_css_1 = __importDefault(require("./Title.module.css"));
var LogoPET_1 = __importDefault(require("../../../../components/logos/LogoPET/LogoPET"));
function PageHeader(_a) {
    var title = _a.title, content = _a.content;
    return (react_1.default.createElement("header", { className: Title_module_css_1.default.cabecalho },
        react_1.default.createElement("div", { className: Title_module_css_1.default.container },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h1", { className: Title_module_css_1.default.title }, title),
                react_1.default.createElement("h2", { className: Title_module_css_1.default.subtitle }, content)),
            react_1.default.createElement(LogoPET_1.default, null))));
}
exports.default = PageHeader;
