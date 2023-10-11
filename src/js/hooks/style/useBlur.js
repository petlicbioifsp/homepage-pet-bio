"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var EquipeConst_1 = require("../../pages/Equipe/constants/EquipeConst");
function useBlur() {
    var _a = (0, react_1.useState)(EquipeConst_1.noBlurStyle), blurred = _a[0], setBlur = _a[1];
    var handleMouseEnter = function () {
        setBlur(EquipeConst_1.withBlurStyle);
    };
    var handleMouseLeave = function () {
        setBlur(EquipeConst_1.noBlurStyle);
    };
    return { blurred: blurred, handleMouseEnter: handleMouseEnter, handleMouseLeave: handleMouseLeave };
}
exports.default = useBlur;
