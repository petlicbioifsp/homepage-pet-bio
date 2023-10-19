"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./MenuMobile.css");
var react_1 = __importStar(require("react"));
var hi_1 = require("react-icons/hi");
var DropDown_1 = __importDefault(require("./Subcomponents/DropDown"));
function MenuMobileDropdown(_a) {
    var items = _a.items;
    var _b = (0, react_1.useState)(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];
    var menuClasses = "menu-mobile ".concat(isDropdownOpen ? "active" : "");
    var toggleDropdown = function () {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (react_1.default.createElement("div", { className: menuClasses },
        react_1.default.createElement(hi_1.HiMenu, { "aria-label": "Toggle Menu", className: "menu-icon", onClick: toggleDropdown }),
        isDropdownOpen && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(DropDown_1.default, { items: items, onClick: toggleDropdown }),
            react_1.default.createElement("div", { className: "cursor", onClick: toggleDropdown })))));
}
exports.default = MenuMobileDropdown;
