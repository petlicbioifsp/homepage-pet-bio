"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Equipe_module_css_1 = __importDefault(require("./Equipe.module.css"));
var react_collapsible_1 = __importDefault(require("react-collapsible"));
var header_1 = __importDefault(require("../../components/ui/Header/header"));
var useFetchEquipe_1 = __importDefault(require("../../hooks/fetch/useFetchEquipe"));
var useCollapsibleOpen_1 = __importDefault(require("../../hooks/collapsible/useCollapsibleOpen"));
var menuNavegacao_1 = __importDefault(require("../../components/menus/MenuNavegacao/menuNavegacao"));
var useCollapsibleTrigger_1 = __importDefault(require("../../hooks/collapsible/useCollapsibleTrigger"));
var RenderSection_1 = __importDefault(require("./SubComponentes/CardComponents/RenderSection"));
function Equipe() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(menuNavegacao_1.default, null),
        react_1.default.createElement("div", { className: Equipe_module_css_1.default["equipe--corpo"] },
            react_1.default.createElement(useFetchEquipe_1.default, { render: function (_a) {
                    var alunos = _a.alunos, tutores = _a.tutores, exAlunos = _a.exAlunos, exTutores = _a.exTutores;
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(header_1.default, { texto: "Integrantes" }),
                        react_1.default.createElement(RenderSection_1.default, { data: tutores, customClass: "equipe--tutor", cardClass: "card", imgContainerClass: "imgContainer" }),
                        react_1.default.createElement(RenderSection_1.default, { data: alunos, customClass: "equipe--alunos", cardClass: "card", imgContainerClass: "imgContainer" }),
                        react_1.default.createElement(react_collapsible_1.default, { classParentString: Equipe_module_css_1.default["EquipeCollapsible"], trigger: react_1.default.createElement(useCollapsibleTrigger_1.default, { text: "Ex-Integrantes", page: "Equipe" }), triggerWhenOpen: react_1.default.createElement(useCollapsibleOpen_1.default, { text: "Ex-Integrantes", page: "Equipe" }) },
                            react_1.default.createElement(RenderSection_1.default, { data: exTutores, customClass: "equipe--tutor", cardClass: "cardExMembro", imgContainerClass: "ExImgContainter" }),
                            react_1.default.createElement(RenderSection_1.default, { data: exAlunos, customClass: "equipe--alunos", cardClass: "cardExMembro", imgContainerClass: "ExImgContainter" }))));
                } }))));
}
exports.default = Equipe;
