"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./Faq.css");
var react_1 = __importDefault(require("react"));
var useFetchFAQ_1 = __importDefault(require("../../hooks/fetch/useFetchFAQ"));
var header_1 = __importDefault(require("../../components/ui/Header/header"));
var RenderFaq_1 = require("./Subcomponents/RenderFaq");
var menuNavegacao_1 = __importDefault(require("../../components/menus/MenuNavegacao/menuNavegacao"));
function Faq() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(menuNavegacao_1.default, null),
        react_1.default.createElement(header_1.default, { texto: "Perguntas Frequentes" }),
        react_1.default.createElement("section", { className: "faq--caixa__perguntas" },
            react_1.default.createElement(useFetchFAQ_1.default, { render: RenderFaq_1.renderFaq }))));
}
exports.default = Faq;
;
