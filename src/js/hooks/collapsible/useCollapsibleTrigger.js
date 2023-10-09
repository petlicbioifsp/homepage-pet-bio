"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ai_1 = require("react-icons/ai");
var md_1 = require("react-icons/md");
var Arrow_module_css_1 = __importDefault(require("../../components/interactive/Arrow/Arrow.module.css"));
function CollapsibleTrigger(_a) {
    var text = _a.text, page = _a.page;
    var isFaqPage = page === 'FAQ';
    return (react_1.default.createElement("div", { className: Arrow_module_css_1.default.conteiner },
        react_1.default.createElement("div", null, isFaqPage ? ('FAQ' && react_1.default.createElement(ai_1.AiFillCaretDown, null)) : (react_1.default.createElement(md_1.MdKeyboardArrowDown, { className: Arrow_module_css_1.default['collapsible-arrow'] }))),
        react_1.default.createElement("div", { className: Arrow_module_css_1.default.CollapsibleTriggerContainer },
            react_1.default.createElement("span", { className: Arrow_module_css_1.default.spanText }, text))));
}
exports.default = CollapsibleTrigger;
;
