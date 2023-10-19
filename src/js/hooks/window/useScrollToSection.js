"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useScrollToSection = function () {
    var sectionRef = (0, react_1.useRef)(null);
    var showArrow = (0, react_1.useState)(true);
    var scrollToSection = function () {
        sectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    };
    return { showArrow: showArrow, sectionRef: sectionRef, scrollToSection: scrollToSection };
};
exports.default = useScrollToSection;
