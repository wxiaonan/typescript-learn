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
// 父类
var Animal = /** @class */ (function () {
    function Animal(name) {
        console.log('父类构造函数---');
        this.name = name;
    }
    Animal.prototype.walk = function () {
        console.log('父类--walk方法');
    };
    return Animal;
}());
// 子类
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.constuctor = function (age, name) {
        // super(name)
        this.age = age;
        console.log('子类-constructor--');
    };
    Dog.prototype.walk = function () {
        // super.walk()
        console.log('子类--方法walk');
    };
    return Dog;
}(Animal));
var dog = new Dog('www');
console.log(dog);
console.log(dog.walk());
