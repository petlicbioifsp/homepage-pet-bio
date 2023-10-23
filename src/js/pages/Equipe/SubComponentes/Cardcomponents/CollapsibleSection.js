"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_collapsible_1 = __importDefault(require("react-collapsible"));
var useCollapsibleOpen_1 = __importDefault(require("../../../../hooks/collapsible/useCollapsibleOpen"));
var useCollapsibleTrigger_1 = __importDefault(require("../../../../hooks/collapsible/useCollapsibleTrigger"));
var EquipeSection_1 = __importDefault(require("./EquipeSection"));
var Equipe_module_css_1 = __importDefault(require("../../Equipe.module.css"));
var useFetchEquipe_1 = __importDefault(require("../../../../hooks/fetch/useFetchEquipe"));
function CollapsibleSection() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(useFetchEquipe_1.default, { render: function (_a) {
                var exAlunos = _a.exAlunos, exTutores = _a.exTutores;
                return (react_1.default.createElement(react_collapsible_1.default, { classParentString: Equipe_module_css_1.default["EquipeCollapsible"], trigger: react_1.default.createElement(useCollapsibleTrigger_1.default, { text: "Ex-Integrantes", page: "Equipe" }), triggerWhenOpen: react_1.default.createElement(useCollapsibleOpen_1.default, { text: "Ex-Integrantes", page: "Equipe" }) },
                    react_1.default.createElement(EquipeSection_1.default, { data: exTutores, customStyles: "equipe--tutor", cardStyles: "cardExMembro", imageContainerStyles: "ExImgContainter" }),
                    react_1.default.createElement(EquipeSection_1.default, { data: exAlunos, customStyles: "equipe--alunos", cardStyles: "cardExMembro", imageContainerStyles: "ExImgContainter" })));
            } })));
}
exports.default = CollapsibleSection;
