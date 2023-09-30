"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Faq.css");
var react_collapsible_1 = __importDefault(require("react-collapsible"));
var useFetchFAQ_1 = __importDefault(require("../../hooks/fetch/useFetchFAQ"));
var header_1 = __importDefault(require("../../components/ui/Header/header"));
var useCollapsibleOpen_1 = __importDefault(require("../../hooks/collapsible/useCollapsibleOpen"));
var useCollapsibleTrigger_1 = __importDefault(require("../../hooks/collapsible/useCollapsibleTrigger"));
var menuNavegacao_1 = __importDefault(require("../../components/menus/MenuNavegacao/menuNavegacao"));
function Faq() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(menuNavegacao_1.default, null),
        react_1.default.createElement(header_1.default, { texto: "Perguntas Frequentes" }),
        react_1.default.createElement("section", { className: "faq--caixa__perguntas" },
            react_1.default.createElement(useFetchFAQ_1.default, { render: function (arrFaq) {
                    return arrFaq.map(function (faqs) { return (react_1.default.createElement(react_collapsible_1.default, { key: faqs.id, trigger: react_1.default.createElement(useCollapsibleTrigger_1.default, { text: faqs.trigger, page: "FAQ" }), triggerWhenOpen: react_1.default.createElement(useCollapsibleOpen_1.default, { text: faqs.trigger, page: "FAQ" }) },
                        react_1.default.createElement("p", { className: "faq-resposta" }, faqs.resposta))); });
                } }))));
}
exports.default = Faq;
