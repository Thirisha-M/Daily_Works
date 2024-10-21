//There are 3 access modifier in typescript
//public,private,protected are the 3 access modifiers in the typescript
// by default,every properties and methods are public
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
var Student_details = /** @class */ (function () {
    function Student_details() {
        this._name = "divya";
        this._age = 21;
        this._isstudent = true;
    }
    Object.defineProperty(Student_details.prototype, "_name_retrieve", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Student_details;
}());
var student_details = new Student_details;
console.log(student_details._name_retrieve); //the _name is declared as public so it can be used anywhere in the code
//property '_age' is private and only accessible within class 'Student_details"
// Thus the private keyword is used when the property or method should only used inside the class
// The public keyword is used when the property or method is used anywhere in the code
var Sub_details = /** @class */ (function (_super) {
    __extends(Sub_details, _super);
    function Sub_details() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Sub_details.prototype, "_isstudent_retrieve", {
        get: function () {
            return this._isstudent;
        },
        enumerable: false,
        configurable: true
    });
    return Sub_details;
}(Student_details));
var sub_details = new Sub_details;
console.log(sub_details._isstudent_retrieve);
