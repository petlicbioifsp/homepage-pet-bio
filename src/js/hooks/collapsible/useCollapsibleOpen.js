"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var md_1 = require("react-icons/md");
require("../../components/interactive/Arrow/Arrow.css");
var ai_1 = require("react-icons/ai");
var CollapsibleOpen = function (_a) {
    var text = _a.text, page = _a.page;
    return (react_1.default.createElement("div", { className: 'conteiner' },
        react_1.default.createElement("div", null,
            page === 'FAQ' && react_1.default.createElement(ai_1.AiFillCaretUp, null),
            page === 'Equipe' && react_1.default.createElement(md_1.MdKeyboardArrowUp, { className: 'collapsible-arrow' })),
        react_1.default.createElement("div", { className: 'CollapsibleTriggerContainer' },
            react_1.default.createElement("span", null, text))));
};
exports.default = CollapsibleOpen;
