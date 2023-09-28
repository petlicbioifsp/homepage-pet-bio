"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./ProcessoSeletivo.css");
var Cabecalho_1 = __importDefault(require("./SubComponentes/Cabecalho/Cabecalho"));
var Requisitos_1 = __importDefault(require("./SubComponentes/Requisitos/Requisitos"));
var Inscricoes_1 = __importDefault(require("./SubComponentes/Inscricoes/Inscricoes"));
var menuNavegacao_1 = __importDefault(require("../../components/menus/MenuNavegacao/menuNavegacao"));
function ProcessoSeletivo() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(menuNavegacao_1.default, null),
        react_1.default.createElement("div", { className: "corpo" },
            react_1.default.createElement(Cabecalho_1.default, { titulo: "Processo Seletivo", texto: 'Todos os estudantes regularmente matriculados no curso de Tecnologia em An\u00E1lise e \r\n                    Desenvolvimento de Sistemas do IFSP C\u00E2mpus S\u00E3o Carlos podem participar dos processos seletivos do PET/ADS. \r\n                    O grupo \u00E9 composto por at\u00E9 doze bolsistas e at\u00E9 seis volunt\u00E1rios.  Os processos seletivos s\u00E3o regidos por \r\n                    editais publicados periodicamente.' }),
            react_1.default.createElement("section", { className: "corpo_informacoes" },
                react_1.default.createElement(Requisitos_1.default, { titulo: "Requisitos", texto: "Para se inscrever no processo seletivo, o candidato dever\u00E1:", item_1: "Estar regularmente matriculado no curso de An\u00E1lise e Desenvolvimento de Sistemas.", item_2: "Possuir disponibilidade para se dedicar 20 horas semanais ao PET/ADS." }),
                react_1.default.createElement(Inscricoes_1.default, { titulo: "Inscri\u00E7\u00F5es", texto_1: "As inscri\u00E7\u00F5es devem ser realizadas pelo e-mail", email: "pet.ads.scl@ifsp.edu.br", texto_2: "Prazo de inscri\u00E7\u00E3o:", data: "27 de mar\u00E7o de 2023", estado: "(encerrado)", texto_3: "Detalhes sobre documentos necess\u00E1rios, crit\u00E9rios, cronograma e outras informa\u00E7\u00F5es devem ser verificadas no edital:" })))));
}
exports.default = ProcessoSeletivo;
