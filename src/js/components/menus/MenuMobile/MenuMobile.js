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
Object.defineProperty(exports, "__esModule", { value: true });
require("./MenuMobile.css");
var react_1 = __importStar(require("react"));
var hi_1 = require("react-icons/hi");
var react_router_dom_1 = require("react-router-dom");
var MenuMobileDropdown = function (_a) {
    var items = _a.items;
    var _b = (0, react_1.useState)(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];
    var toggleDropdown = function () {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (react_1.default.createElement("div", { className: "menu-mobile ".concat(isDropdownOpen ? 'active' : '') },
        react_1.default.createElement(hi_1.HiMenu, { "aria-label": "Toggle Menu", className: 'menu-icon', onClick: toggleDropdown }),
        isDropdownOpen && (react_1.default.createElement("div", { className: "dots", onClick: toggleDropdown },
            react_1.default.createElement("div", { className: "dot" }),
            react_1.default.createElement("div", { className: "dot" }),
            react_1.default.createElement("div", { className: "shadow cut" }),
            react_1.default.createElement("div", { className: "container cut" },
                react_1.default.createElement("div", { className: "drop cut2" })),
            react_1.default.createElement("div", { className: "list" },
                react_1.default.createElement("ul", null, items.map(function (item) { return (react_1.default.createElement("li", { key: item.path },
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: item.path, className: "dropdown-link", onClick: toggleDropdown }, item.label))); }))),
            react_1.default.createElement("div", { className: "dot" }))),
        isDropdownOpen && (react_1.default.createElement("div", { className: "cursor", onClick: toggleDropdown }))));
};
exports.default = MenuMobileDropdown;
