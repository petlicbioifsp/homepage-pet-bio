"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
function ItemList(_a) {
    var items = _a.items, onClick = _a.onClick;
    return (react_1.default.createElement("div", { className: "list" },
        react_1.default.createElement("ul", null, items.map(function (_a) {
            var path = _a.path, label = _a.label;
            return (react_1.default.createElement("li", { key: path },
                react_1.default.createElement(react_router_dom_1.NavLink, { to: path, className: "dropdown-link", onClick: onClick }, label)));
        }))));
}
exports.default = ItemList;
