"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Arrow_module_css_1 = __importDefault(require("./Arrow.module.css"));
var ArrowShape = function (_a) {
    var ArrowShapeClass = _a.ArrowShapeClass;
    return react_1.default.createElement("span", { className: Arrow_module_css_1.default[ArrowShapeClass] });
};
exports.default = ArrowShape;
