var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./Button.css";
var Button = function (props) {
    var _a = useState(0), counter = _a[0], setCounter = _a[1];
    return (_jsxs("button", __assign({ className: "custom-button", onClick: function () { return setCounter(function (counter) { return counter + 1; }); } }, { children: [props.label, ": ", counter] })));
};
export default Button;
//# sourceMappingURL=Button.js.map