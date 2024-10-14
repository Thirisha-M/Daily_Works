// The readonly is more similar to the const keyword
// The value can be changed only in two places inside the class and constructor
var Employee_details = /** @class */ (function () {
    function Employee_details() {
        this._name = "divya"; //readonly is used in the _name
    }
    Object.defineProperty(Employee_details.prototype, "emp_name", {
        get: function () {
            return this._name;
        },
        set: function (values) {
            this._name = value; //cannot assign to '_name' because it is a read_only property.
        },
        enumerable: false,
        configurable: true
    });
    return Employee_details;
}());
var employee_details = new Employee_details;
employee_details.emp_name = "sasu";
console.log(employee_details.emp_name);
// Error free code
// when readonly is used in the code the value can only be changed in the class definition and in constructor
var Employee_details = /** @class */ (function () {
    function Employee_details() {
        this._name = "sasu"; //readonly is used in the _name
    }
    Object.defineProperty(Employee_details.prototype, "emp_name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Employee_details;
}());
var employee_details1 = new Employee_details;
console.log(employee_details.emp_name);
