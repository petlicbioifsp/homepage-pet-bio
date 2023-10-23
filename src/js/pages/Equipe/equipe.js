"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Equipe_module_css_1 = __importDefault(require("./Equipe.module.css"));
var header_1 = __importDefault(require("../../components/ui/Header/header"));
var Members_1 = __importDefault(require("./SubComponentes/CardComponents/Members"));
var menuNavegacao_1 = __importDefault(require("../../components/menus/MenuNavegacao/menuNavegacao"));
var CollapsibleSection_1 = __importDefault(require("./SubComponentes/CardComponents/CollapsibleSection"));
function Equipe() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(menuNavegacao_1.default, null),
        react_1.default.createElement("div", { className: Equipe_module_css_1.default["equipe--corpo"] },
            react_1.default.createElement(header_1.default, { texto: "Integrantes" }),
            react_1.default.createElement(Members_1.default, null),
            react_1.default.createElement(CollapsibleSection_1.default, null))));
}
exports.default = Equipe;
