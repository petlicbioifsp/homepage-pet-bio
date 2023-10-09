"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
function MenuDesk(_a) {
    var items = _a.items;
    return (react_1.default.createElement("ul", { className: "menu-navegacao" }, items.map(function (_a) {
        var path = _a.path, label = _a.label;
        return (react_1.default.createElement("li", { key: path },
            react_1.default.createElement(react_router_dom_1.NavLink, { to: path, className: "menu-navegacao--link" }, label)));
    })));
}
exports.default = MenuDesk;
