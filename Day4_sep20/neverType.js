var authorize = function (role) {
    switch (role) {
        case 'admin':
            return 'You can do anything';
        case 'user':
            return 'You can do something';
        case 'guest':
            return 'You can do nothing';
        default:
            // never reach here util we add a new role
            var _unreachable = role;
            throw new Error("Invalid role: ".concat(_unreachable));
    }
};
var unknownRole = function (role) {
    throw new Error("Invalid role: ".concat(role));
};
var authorize1 = function (role) {
    switch (role) {
        case 'admin':
            return 'You can do anything';
        case 'user':
            return 'You can do   something';
        case 'guest':
            return 'You can do nothing';
        default:
            // never reach here util we add a new role
            return unknownRole(role);
    }
};
console.log(authorize('admin'));
