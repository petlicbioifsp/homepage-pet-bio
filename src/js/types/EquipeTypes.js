"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withBlurStyle = exports.noBlurStyle = void 0;
var BlurStyles;
(function (BlurStyles) {
    BlurStyles["WithBlur"] = "blur(2px) grayscale(80%) brightness(0.5)";
    BlurStyles["NoBlur"] = "blur(0px) grayscale(0%)";
})(BlurStyles || (BlurStyles = {}));
exports.noBlurStyle = {
    filter: BlurStyles.NoBlur,
};
exports.withBlurStyle = {
    filter: BlurStyles.WithBlur,
};
