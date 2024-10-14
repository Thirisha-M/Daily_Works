// the getter is used to get the value and setter is used to set the value in the class
var student = /** @class */ (function () {
    function student() {
        this.name = "diya";
        this.id = 1234;
        this.age = 18;
    }
    Object.defineProperty(student.prototype, "get_name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "set_name", {
        set: function (final_name) {
            this.name = final_name;
        },
        enumerable: false,
        configurable: true
    });
    return student;
}());
var Student = new student;
Student.set_name = "sasu";
console.log(Student.get_name);


// Create a book class with a private property_title.Implememt a getter andsetter for the title.

var Book = /** @class */ (function () {
    function Book() {
        this._title = "aws";
    }
    Object.defineProperty(Book.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
var book = new Book;
book.title = "devops";
console.log(book.title);
