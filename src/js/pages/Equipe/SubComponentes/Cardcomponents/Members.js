"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useFetchEquipe_1 = __importDefault(require("../../../../hooks/fetch/useFetchEquipe"));
var EquipeSection_1 = __importDefault(require("./EquipeSection"));
function Members() {
    return (react_1.default.createElement(useFetchEquipe_1.default, { render: function (_a) {
            var alunos = _a.alunos, tutores = _a.tutores;
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(EquipeSection_1.default, { data: tutores, customStyles: "equipe--tutor", cardStyles: "card", imageContainerStyles: "imgContainer" }),
                react_1.default.createElement(EquipeSection_1.default, { data: alunos, customStyles: "equipe--alunos", cardStyles: "card", imageContainerStyles: "imgContainer" })));
        } }));
}
exports.default = Members;
