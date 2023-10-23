"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useWindowSize_1 = __importDefault(require("./useWindowSize"));
function useIsMobile() {
    var width = (0, useWindowSize_1.default)().width;
    return width <= 628;
}
exports.default = useIsMobile;
