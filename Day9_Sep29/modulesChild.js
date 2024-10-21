"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var modules_Parents_1 = require("./modules_Parents");
var module_child = /** @class */ (function (_super) {
    __extends(module_child, _super);
    function module_child() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 1234;
        _this.emp_id = "ab12";
        return _this;
    }
    return module_child;
}(modules_Parents_1.module_parent));
var m = new module_child;
console.log(m.emp_id);
