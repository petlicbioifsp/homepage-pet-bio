"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./cardProjeto.css");
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var fa_1 = require("react-icons/fa");
var ai_1 = require("react-icons/ai");
var md_1 = require("react-icons/md");
var react_2 = __importDefault(require("react"));
function CardProjeto(props) {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    function setingIsOpen() {
        setIsOpen(!isOpen);
    }
    return (react_2.default.createElement(react_2.default.Fragment, null,
        !isOpen && (react_2.default.createElement(framer_motion_1.motion.div, { className: isOpen ? "card aberto" : "card fechado", onClick: setingIsOpen },
            react_2.default.createElement(framer_motion_1.motion.div, { className: "logoConteinerOpenned" },
                props.tipo === 'ensino' && react_2.default.createElement(fa_1.FaGraduationCap, { className: 'logo-projeto' }),
                props.tipo === 'pesquisa' && react_2.default.createElement(fa_1.FaSearch, { className: 'logo-projeto' }),
                props.tipo === 'extensão' && react_2.default.createElement(md_1.MdExtension, { className: 'logo-projeto' }),
                props.tipo === 'extensão-desenvolivmento' && react_2.default.createElement(md_1.MdOutlineComputer, { className: 'logo-projeto' }),
                react_2.default.createElement(framer_motion_1.motion.a, { rel: 'noopener noreferrer', target: "_blank", href: props.link },
                    react_2.default.createElement(fa_1.FaGithub, { className: "Icon" }))),
            react_2.default.createElement(framer_motion_1.motion.div, null,
                react_2.default.createElement(framer_motion_1.motion.h2, { className: "card-titulo" }, props.titulo),
                react_2.default.createElement(framer_motion_1.motion.p, { className: "card-descricao" }, props.descricao)))),
        isOpen && (react_2.default.createElement(react_2.default.Fragment, null,
            react_2.default.createElement("div", { className: "card_background", onClick: function () { return setIsOpen(!isOpen); } }),
            react_2.default.createElement(framer_motion_1.motion.div, { className: isOpen ? "card aberto" : "card fechado" },
                react_2.default.createElement(framer_motion_1.motion.div, { className: "logoConteinerClosed" },
                    props.tipo === 'ensino' && react_2.default.createElement(fa_1.FaGraduationCap, { className: 'logo-projeto' }),
                    props.tipo === 'pesquisa' && react_2.default.createElement(fa_1.FaSearch, { className: 'logo-projeto' }),
                    props.tipo === 'extensão' && react_2.default.createElement(md_1.MdExtension, { className: 'logo-projeto' }),
                    props.tipo === 'extensão-desenvolivmento' && react_2.default.createElement(md_1.MdOutlineComputer, { className: 'logo-projeto' }),
                    react_2.default.createElement(framer_motion_1.motion.a, { rel: 'noopener noreferrer', target: "_blank", href: props.link },
                        react_2.default.createElement(fa_1.FaGithub, { className: "icon-aberto" }))),
                react_2.default.createElement(ai_1.AiFillCloseCircle, { className: "closeButton", onClick: function () { return setIsOpen(!isOpen); } }),
                react_2.default.createElement(framer_motion_1.motion.div, null,
                    react_2.default.createElement(framer_motion_1.motion.h2, { className: "card-titulo" },
                        props.titulo,
                        " \u2192 ",
                        props.status),
                    react_2.default.createElement(framer_motion_1.motion.div, { className: "scrowSpace" },
                        react_2.default.createElement("p", { className: 'card--texto__expandido' }, props.expandido),
                        react_2.default.createElement("div", { className: 'card--texto__envolvidos' },
                            react_2.default.createElement("p", { className: 'card--texto__expandido' },
                                props.tecnologias,
                                " "),
                            react_2.default.createElement("p", { className: 'card--texto__expandido' })))))))));
}
exports.default = CardProjeto;
