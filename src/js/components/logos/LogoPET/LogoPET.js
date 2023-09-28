"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LogoPET_module_css_1 = __importDefault(require("./LogoPET.module.css"));
var LogoPET_png_1 = __importDefault(require("../../../resources/logos/LogoPET.png"));
var react_1 = __importDefault(require("react"));
function LogoPET() {
    return (react_1.default.createElement("img", { className: LogoPET_module_css_1.default.PETLogo, src: LogoPET_png_1.default, alt: 'Identidade Visual PET/ADS' }));
}
exports.default = LogoPET;
