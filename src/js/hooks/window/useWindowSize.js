"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useWindowSize() {
    var _a = (0, react_1.useState)({ width: window.innerWidth }), size = _a[0], setSize = _a[1];
    var handleResize = function () {
        setSize({
            width: window.innerWidth,
        });
    };
    (0, react_1.useEffect)(function () {
        setSize({
            width: window.innerWidth
        });
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return size;
}
exports.default = useWindowSize;
