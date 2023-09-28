"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./Arrow.css");
var react_1 = __importDefault(require("react"));
var ArrowShape = function (_a) {
    var customClass = _a.customClass;
    return react_1.default.createElement("span", { className: " ".concat(customClass) });
};
exports.default = ArrowShape;
