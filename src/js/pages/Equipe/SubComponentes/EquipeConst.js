"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withBlurStyle = exports.noBlurStyle = void 0;
var EquipeTypes_1 = require("../../../types/EquipeTypes");
exports.noBlurStyle = {
    filter: EquipeTypes_1.BlurStyles.NoBlur,
};
exports.withBlurStyle = {
    filter: EquipeTypes_1.BlurStyles.WithBlur,
};
