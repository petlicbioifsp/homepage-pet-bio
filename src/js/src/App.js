"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./global/App.css");
var react_1 = __importDefault(require("react"));
var Faq_1 = __importDefault(require("./pages/Faq/Faq"));
var home_1 = __importDefault(require("./pages/Home/home"));
var equipe_1 = __importDefault(require("./pages/Equipe/equipe"));
var projetos_1 = __importDefault(require("./pages/Projetos/projetos"));
var footer_1 = __importDefault(require("./components/ui/Footer/footer"));
var react_router_dom_1 = require("react-router-dom");
var ProcessoSeletivo_1 = __importDefault(require("./pages/ProcessoSeletivo/ProcessoSeletivo"));
function App() {
    return (react_1.default.createElement(react_router_dom_1.HashRouter, null,
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(home_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/projetos", element: react_1.default.createElement(projetos_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/equipe", element: react_1.default.createElement(equipe_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/processo-seletivo", element: react_1.default.createElement(ProcessoSeletivo_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/faq", element: react_1.default.createElement(Faq_1.default, null) }))),
        react_1.default.createElement(footer_1.default, null)));
}
exports.default = App;
