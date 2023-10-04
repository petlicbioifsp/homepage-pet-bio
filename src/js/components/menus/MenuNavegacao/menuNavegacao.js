"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./menuNavegacao.css");
var react_router_dom_1 = require("react-router-dom");
var LogoIFSP_1 = __importDefault(require("../../logos/LogoIFSP/LogoIFSP"));
var MenuMobile_1 = __importDefault(require("../MenuMobile/MenuMobile"));
var useIsMobile_1 = __importDefault(require("../../../hooks/window/useIsMobile"));
function MenuNavegacao() {
    var isMobile = (0, useIsMobile_1.default)();
    var items = [
        { path: '/', label: 'Home' },
        { path: '/projetos', label: 'Projetos' },
        { path: '/equipe', label: 'Equipe' },
        { path: '/processo-seletivo', label: 'Processo Seletivo' },
        { path: '/faq', label: 'FAQ' },
    ];
    return (react_1.default.createElement("div", { className: "menu" },
        react_1.default.createElement(LogoIFSP_1.default, null),
        isMobile ? (react_1.default.createElement(MenuMobile_1.default, { items: items })) : (react_1.default.createElement("ul", { className: "menu-navegacao" },
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: "menu-navegacao--link" }, "Home")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/projetos", className: "menu-navegacao--link" }, "Projetos")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/equipe", className: "menu-navegacao--link" }, "Equipe")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/processo-seletivo", className: "menu-navegacao--link" }, "Processo Seletivo")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/faq", className: "menu-navegacao--link" }, "FAQ"))))));
}
exports.default = MenuNavegacao;
