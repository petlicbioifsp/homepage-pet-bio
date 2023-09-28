"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./ScrollArrow.css");
var Arrow_1 = __importDefault(require("../../../../components/interactive/Arrow/Arrow"));
var ScrollArrow = function (_a) {
    var showArrow = _a.showArrow, sectionRef = _a.sectionRef, scrollToSection = _a.scrollToSection, customClass1 = _a.customClass1, customClass2 = _a.customClass2;
    return (react_1.default.createElement("div", { className: "".concat(customClass1, " ").concat(showArrow ? 'visible' : ''), onClick: scrollToSection },
        react_1.default.createElement(Arrow_1.default, { customClass: customClass2 })));
};
exports.default = ScrollArrow;
