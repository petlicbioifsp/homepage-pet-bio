"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useWindowSize() {
    var _a = (0, react_1.useState)(undefined), size = _a[0], setSize = _a[1];
    var handleResize = function () {
        setSize({
            width: window.innerWidth,
        });
    };
    (0, react_1.useEffect)(function () {
        handleResize();
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return size || { width: 0 };
}
exports.default = useWindowSize;
