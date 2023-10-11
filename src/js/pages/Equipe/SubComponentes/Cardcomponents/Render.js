"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../equipe.css");
var react_1 = __importDefault(require("react"));
function Render(_a) {
    var data = _a.data, render = _a.render, customClass = _a.customClass;
    return (react_1.default.createElement("section", { className: customClass }, data.map(function (item, index) { return (react_1.default.createElement("div", { key: index }, render(item, index))); })));
}
exports.default = Render;
