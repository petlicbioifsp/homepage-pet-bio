"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderFaq = void 0;
var react_1 = __importDefault(require("react"));
var react_collapsible_1 = __importDefault(require("react-collapsible"));
var useCollapsibleOpen_1 = __importDefault(require("../../../hooks/collapsible/useCollapsibleOpen"));
var useCollapsibleTrigger_1 = __importDefault(require("../../../hooks/collapsible/useCollapsibleTrigger"));
var renderFaq = function (faqItems) {
    var renderFaqItem = function (faq) { return (react_1.default.createElement(react_collapsible_1.default, { key: faq.id, trigger: react_1.default.createElement(useCollapsibleTrigger_1.default, { text: faq.trigger, page: "FAQ" }), triggerWhenOpen: react_1.default.createElement(useCollapsibleOpen_1.default, { text: faq.trigger, page: "FAQ" }) },
        react_1.default.createElement("p", { className: "faq-resposta" }, faq.resposta))); };
    var faqElements = faqItems.map(renderFaqItem);
    return faqElements;
};
exports.renderFaq = renderFaq;
