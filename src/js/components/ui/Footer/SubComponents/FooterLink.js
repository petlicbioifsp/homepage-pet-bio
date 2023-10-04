"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var footer_module_css_1 = __importDefault(require("../footer.module.css"));
function FooterLink(_a) {
    var href = _a.href, title = _a.title, rel = _a.rel, target = _a.target, className = _a.className, children = _a.children;
    return (react_1.default.createElement("a", { href: href, title: title, rel: rel, target: target, className: "".concat(footer_module_css_1.default.link, " ").concat(className) }, children));
}
exports.default = FooterLink;
