"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dot_1 = __importDefault(require("./Dot"));
var react_1 = __importDefault(require("react"));
var ItemList_1 = __importDefault(require("./ItemList"));
var Shadowcut_1 = __importDefault(require("./Shadowcut"));
var COnteinerCut_1 = __importDefault(require("./COnteinerCut"));
function DropdownContent(_a) {
    var items = _a.items, onClick = _a.onClick;
    return (react_1.default.createElement("div", { className: "dots", onClick: onClick },
        react_1.default.createElement(Dot_1.default, null),
        react_1.default.createElement(Dot_1.default, null),
        react_1.default.createElement(Shadowcut_1.default, null),
        react_1.default.createElement(COnteinerCut_1.default, null),
        react_1.default.createElement(ItemList_1.default, { items: items, onClick: onClick }),
        react_1.default.createElement(Dot_1.default, null)));
}
exports.default = DropdownContent;
