"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CardIMG_1 = __importDefault(require("../CardComponents/CardIMG"));
var CardDescription_1 = __importDefault(require("../CardComponents/CardDescription"));
var CardIntegrantes_module_css_1 = __importDefault(require("./CardIntegrantes.module.css"));
function CardAluno(_a) {
    var nome = _a.nome, srcFoto = _a.srcFoto, tipo = _a.tipo, github = _a.github, linkedin = _a.linkedin;
    var altFoto = "Foto de ".concat(nome, ", integrante do PET ADS do IFSP Sao Carlos");
    return (react_1.default.createElement("div", { className: CardIntegrantes_module_css_1.default.card },
        react_1.default.createElement(CardIMG_1.default, { customClass: 'imgContainer', srcFoto: srcFoto, altFoto: altFoto, github: github, linkedin: linkedin }),
        react_1.default.createElement(CardDescription_1.default, { nome: nome, tipo: tipo })));
}
exports.default = CardAluno;
