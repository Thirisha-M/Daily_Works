//simple class 
var User = /** @class */ (function () {
    function User(x) {
        this.id = x;
    }
    return User;
}());
var userobject = new User(10);
console.log(userobject.id);
