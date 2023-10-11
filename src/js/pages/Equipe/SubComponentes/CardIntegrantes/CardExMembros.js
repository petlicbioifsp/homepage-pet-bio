"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CardIMG_1 = __importDefault(require("../CardComponents/CardIMG"));
var CardIntegrantes_module_css_1 = __importDefault(require("../CardIntegrantes/CardIntegrantes.module.css"));
var CardDescription_1 = __importDefault(require("../CardComponents/CardDescription"));
function CardExAluno(_a) {
    var nome = _a.nome, srcFoto = _a.srcFoto, tipo = _a.tipo, ano = _a.ano, linkedin = _a.linkedin;
    var altFoto = "Foto de ".concat(nome, ", integrante do PET ADS do IFSP Sao Carlos");
    return (react_1.default.createElement("div", { className: CardIntegrantes_module_css_1.default.cardExMembro },
        react_1.default.createElement(CardIMG_1.default, { customClass: 'ExImgContainter', srcFoto: srcFoto, altFoto: altFoto, linkedin: linkedin }),
        react_1.default.createElement(CardDescription_1.default, { nome: nome, tipo: tipo, ano: ano })));
}
exports.default = CardExAluno;
