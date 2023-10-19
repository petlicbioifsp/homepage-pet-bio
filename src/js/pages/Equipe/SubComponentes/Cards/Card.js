"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CardIMG_1 = __importDefault(require("../CardComponents/CardIMG"));
var CardDescription_1 = __importDefault(require("../CardComponents/CardDescription"));
function Card(_a) {
    var customClass = _a.customClass, nome = _a.nome, srcFoto = _a.srcFoto, tipo = _a.tipo, github = _a.github, linkedin = _a.linkedin, ano = _a.ano;
    var altFoto = "Foto de ".concat(nome, ", integrante do PET ADS do IFSP Sao Carlos");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CardIMG_1.default, { customClass: customClass, srcFoto: srcFoto, altFoto: altFoto, github: github, linkedin: linkedin, nome: '', tipo: '', ano: '' }),
        react_1.default.createElement(CardDescription_1.default, { nome: nome, tipo: tipo, ano: ano })));
}
exports.default = Card;
