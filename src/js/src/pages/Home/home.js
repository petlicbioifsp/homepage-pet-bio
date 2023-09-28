"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./home.css");
var react_1 = __importDefault(require("react"));
var Infos_1 = __importDefault(require("./SubComponentes/Home_Infos/Infos"));
var Button_1 = __importDefault(require("./SubComponentes/Home_button/Button"));
var useIsMobile_1 = __importDefault(require("../../hooks/window/useIsMobile"));
var ScrollArrow_1 = __importDefault(require("./SubComponentes/ScrollArrow/ScrollArrow"));
var useScrollToSection_1 = __importDefault(require("../../hooks/window/useScrollToSection"));
var Reveal_1 = __importDefault(require("../../components/interactive/Efeito Reveal/Reveal"));
var AboutPETtext_1 = require("../../../public/data/TextConstants/AboutPETtext");
var PurposePET_1 = require("../../../public/data/TextConstants/PurposePET");
var menuNavegacao_1 = __importDefault(require("../../components/menus/MenuNavegacao/menuNavegacao"));
var HeaderConteiner_1 = __importDefault(require("./SubComponentes/Header_conteiner/HeaderConteiner"));
function Home() {
    var isMobile = (0, useIsMobile_1.default)();
    var _a = (0, useScrollToSection_1.default)(), showArrowAbout = _a.showArrow, sectionRefAbout = _a.sectionRef, scrollToSectionAbout = _a.scrollToSection;
    var _b = (0, useScrollToSection_1.default)(), showArrowPurpose = _b.showArrow, sectionRefPurpose = _b.sectionRef, scrollToSectionPurpose = _b.scrollToSection;
    return (react_1.default.createElement("div", { className: "home" },
        react_1.default.createElement(menuNavegacao_1.default, null),
        react_1.default.createElement(HeaderConteiner_1.default, null),
        react_1.default.createElement(ScrollArrow_1.default, { showArrow: showArrowAbout, scrollToSection: scrollToSectionAbout, customClass1: 'scroll-arrow', customClass2: 'home-arrow' }),
        react_1.default.createElement("div", { className: 'scrolltoView', id: 'section1', ref: sectionRefAbout },
            react_1.default.createElement(Reveal_1.default, null,
                react_1.default.createElement(Infos_1.default, { title: "Sobre o PET", content: isMobile ? AboutPETtext_1.AboutPET.mobile : AboutPETtext_1.AboutPET.desktop }),
                react_1.default.createElement(Button_1.default, { value: "Processo Seletivo", to: '/processo-seletivo' }))),
        react_1.default.createElement(ScrollArrow_1.default, { showArrow: showArrowPurpose, scrollToSection: scrollToSectionPurpose, customClass1: 'scroll-arrow2', customClass2: 'home-arrow' }),
        react_1.default.createElement("div", { className: 'scrolltoView', id: 'section2', ref: sectionRefPurpose },
            react_1.default.createElement(Reveal_1.default, null,
                react_1.default.createElement(Infos_1.default, { title: "Prop\u00F3sito", content: isMobile ? PurposePET_1.Purpose.mobile : PurposePET_1.Purpose.desktop }),
                react_1.default.createElement(Button_1.default, { value: "Conhe\u00E7a os Projetos", to: '/projetos' })))));
}
exports.default = Home;
