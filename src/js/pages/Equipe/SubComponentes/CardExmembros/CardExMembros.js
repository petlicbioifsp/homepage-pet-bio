"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CardIMG_1 = __importDefault(require("./CardIMG"));
var CardExAluno_module_css_1 = __importDefault(require("./CardExAluno.module.css"));
var CardDescription_1 = __importDefault(require("../CardIntegrantes/CardDescription"));
function CardExAluno(_a) {
    var nome = _a.nome, srcFoto = _a.srcFoto, tipo = _a.tipo, ano = _a.ano, linkedin = _a.linkedin;
    var altFoto = "Foto de ".concat(nome, ", integrante do PET ADS do IFSP Sao Carlos");
    return (react_1.default.createElement("div", { className: CardExAluno_module_css_1.default.card },
        react_1.default.createElement(CardIMG_1.default, { srcFoto: srcFoto, altFoto: altFoto, linkedin: linkedin, nome: '' }),
        react_1.default.createElement(CardDescription_1.default, { nome: nome, tipo: tipo, ano: ano, srcFoto: '', altFoto: '' })));
}
exports.default = CardExAluno;
