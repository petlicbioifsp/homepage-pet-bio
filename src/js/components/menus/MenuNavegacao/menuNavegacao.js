"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./menuNavegacao.css");
var react_router_dom_1 = require("react-router-dom");
var LogoIFSP_1 = __importDefault(require("../../logos/LogoIFSP/LogoIFSP"));
var react_1 = __importStar(require("react"));
var MenuMobile_1 = __importDefault(require("../MenuMobile/MenuMobile"));
function MenuNavegacao() {
    var _a = (0, react_1.useState)(window.innerWidth), larguraJanela = _a[0], setLarguraJanela = _a[1];
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            setLarguraJanela(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    var items = [
        { path: '/', label: 'Home' },
        { path: '/projetos', label: 'Projetos' },
        { path: '/equipe', label: 'Equipe' },
        { path: '/processo-seletivo', label: 'Processo Seletivo' },
        { path: '/faq', label: 'FAQ' },
    ];
    return (react_1.default.createElement("div", { className: "menu" },
        react_1.default.createElement(LogoIFSP_1.default, null),
        larguraJanela < 775 ? (react_1.default.createElement(MenuMobile_1.default, { items: items })) : (react_1.default.createElement("ul", { className: "menu-navegacao" },
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
