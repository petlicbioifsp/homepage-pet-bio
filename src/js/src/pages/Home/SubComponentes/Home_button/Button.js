"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Button_module_css_1 = __importDefault(require("./Button.module.css"));
var useScrollToTop_1 = __importDefault(require("../../../../hooks/window/useScrollToTop"));
function Button(_a) {
    var value = _a.value, to = _a.to;
    return (react_1.default.createElement("div", { className: Button_module_css_1.default.btn_contender },
        react_1.default.createElement(react_router_dom_1.Link, { className: Button_module_css_1.default.btn, type: 'button', to: to, onClick: useScrollToTop_1.default }, value)));
}
exports.default = Button;
