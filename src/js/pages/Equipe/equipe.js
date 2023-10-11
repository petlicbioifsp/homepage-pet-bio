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
var CardIntegrantes_1 = __importDefault(require("./SubComponentes/Cards/CardIntegrantes"));
var CardExMembros_1 = __importDefault(require("./SubComponentes/Cards/CardExMembros"));
var useCollapsibleOpen_1 = __importDefault(require("../../hooks/collapsible/useCollapsibleOpen"));
var menuNavegacao_1 = __importDefault(require("../../components/menus/MenuNavegacao/menuNavegacao"));
var useCollapsibleTrigger_1 = __importDefault(require("../../hooks/collapsible/useCollapsibleTrigger"));
var Render_1 = __importDefault(require("./SubComponentes/CardComponents/Render"));
function Equipe() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(menuNavegacao_1.default, null),
        react_1.default.createElement("div", { className: Equipe_module_css_1.default["equipe--corpo"] },
            react_1.default.createElement(useFetchEquipe_1.default, { render: function (_a) {
                    var alunos = _a.alunos, tutores = _a.tutores, exAlunos = _a.exAlunos, exTutores = _a.exTutores;
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(header_1.default, { texto: "Integrantes" }),
                        react_1.default.createElement(Render_1.default, { data: tutores, customClass: Equipe_module_css_1.default["equipe--tutor"], render: function (tutor) { return (react_1.default.createElement(CardIntegrantes_1.default, { key: tutor.id, github: tutor.github, nome: tutor.nome, tipo: tutor.tipo, srcFoto: tutor.srcFoto, ano: tutor.ano, linkedin: tutor.linkedin })); } }),
                        react_1.default.createElement(Render_1.default, { data: alunos, customClass: Equipe_module_css_1.default["equipe--alunos"], render: function (aluno) { return (react_1.default.createElement(CardIntegrantes_1.default, { key: aluno.id, nome: aluno.nome, srcFoto: aluno.srcFoto, tipo: aluno.tipo, ano: aluno.ano, github: aluno.github, linkedin: aluno.linkedin })); } }),
                        react_1.default.createElement(react_collapsible_1.default, { classParentString: Equipe_module_css_1.default["EquipeCollapsible"], trigger: react_1.default.createElement(useCollapsibleTrigger_1.default, { text: "Ex-Integrantes", page: "Equipe" }), triggerWhenOpen: react_1.default.createElement(useCollapsibleOpen_1.default, { text: "Ex-Integrantes", page: "Equipe" }) },
                            react_1.default.createElement(Render_1.default, { data: exTutores, customClass: Equipe_module_css_1.default["equipe--tutor"], render: function (exTutor) { return (react_1.default.createElement(CardExMembros_1.default, { key: exTutor.id, nome: exTutor.nome, tipo: exTutor.tipo, srcFoto: exTutor.srcFoto, ano: exTutor.ano })); } }),
                            react_1.default.createElement(Render_1.default, { data: exAlunos, customClass: Equipe_module_css_1.default["equipe--alunos"], render: function (exAluno) { return (react_1.default.createElement(CardExMembros_1.default, { key: exAluno.id, nome: exAluno.nome, srcFoto: exAluno.srcFoto, linkedin: exAluno.linkedin })); } }))));
                } }))));
}
exports.default = Equipe;
