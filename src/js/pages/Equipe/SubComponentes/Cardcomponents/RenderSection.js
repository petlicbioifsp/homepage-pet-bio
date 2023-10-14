"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var RenderTeam_1 = require("./RenderTeam");
var Equipe_module_css_1 = __importDefault(require("../../Equipe.module.css"));
function RenderMemberSection(_a) {
    var data = _a.data, customClass = _a.customClass, cardClass = _a.cardClass, imgContainerClass = _a.imgContainerClass;
    return (react_1.default.createElement("section", { className: Equipe_module_css_1.default[customClass] }, (0, RenderTeam_1.renderMembers)(data, cardClass, imgContainerClass)));
}
exports.default = RenderMemberSection;
