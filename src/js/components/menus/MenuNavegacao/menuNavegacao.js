"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./menuNavegacao.css");
var MenuDesk_1 = __importDefault(require("./Subcomponents/MenuDesk"));
var LogoIFSP_1 = __importDefault(require("../../logos/LogoIFSP/LogoIFSP"));
var MenuMobile_1 = __importDefault(require("../MenuMobile/MenuMobile"));
var useIsMobile_1 = __importDefault(require("../../../hooks/window/useIsMobile"));
function MenuNavegacao() {
    var isMobile = (0, useIsMobile_1.default)();
    var items = [
        { path: "/", label: "Home" },
        { path: "/projetos", label: "Projetos" },
        { path: "/equipe", label: "Equipe" },
        { path: "/processo-seletivo", label: "Processo Seletivo" },
        { path: "/faq", label: "FAQ" },
    ];
    return (react_1.default.createElement("div", { className: "menu" },
        react_1.default.createElement(LogoIFSP_1.default, null),
        isMobile ? react_1.default.createElement(MenuMobile_1.default, { items: items }) : react_1.default.createElement(MenuDesk_1.default, { items: items })));
}
exports.default = MenuNavegacao;
