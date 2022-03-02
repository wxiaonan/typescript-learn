// 构造函数&this-----------


// 继承----------
// // 抽象父类： 与其他类的区别：不能被实例化，专门定义的、用来被继承的
// abstract class Animal {
//     name: string
// 构造函数在new实例化的时候被调用，其中new Animal（参数），可将参数，赋值给当前类的name：this.name = name
//     constructor(name: string) {
//         console.log('父类构造函数---')
//          this在实例方法中，this指当前对象，
//         this.name = name;

//     }
//     walk() {
//         console.log('父类--walk方法')
//     }
// 抽象方法：父类中抽象方法没有方法体，子类必须对抽象方法重写，
//     abstract run()
// }


// // 子类继承父类: 子类会继承父类所有属性和方法
// 实际公共代码，会抽离到父类中，子类也可定义独立的方法和属性
// 注意开闭原则：在子类可拓展，新增属性和方法，旧的类，作为父类即可（不影响旧逻辑）

// class Dog extends Animal {
//     run() {
//         throw new Error("Method not implemented.");
//     }

//     age: number;
//     constuctor(age, name) {
//         // super(name) 不允许在构造函数外部或在构造函数内的嵌套函数中进行 Super 调用。ts(2337)
// super关键字：super代表当前类的父类，子类的构造函数必须调用super

//         this.age = age
//         console.log('子类-constructor--')

//     }
//     walk() {
//         super.walk()
//         console.log('子类--方法walk')
//     }

// }


// const dog = new Dog('www') this指的是dog 当前实例对象
// console.log(dog)
// console.log(dog.walk())

// 接口：用来定义一个类的结构。用来定义一个类的属性和方法，同名接口可以合并，
// 接口可以在定义类的时候，去限制类的结构
// 接口所有属性。不能有实际值
// 接口只定义对象结构，类似抽象类。抽象方法，使用者必须和接口保持一致

// interface A {
//     name: string
//     say(): void;
// }

// 实现类： B类必须实现A类中所有属性和方法
// class B implements A {
//     name: string;
//     say(): void {
//         throw new Error("Method not implemented.");
//     }

// }


// ----private私有属性：只能在当前类中访问&修改
// protected：只能本类&子类中访问
// class A {
//     private _name: string;
//     constructor(name: string) {
//         this._name = name
//     }
//     // 注意get set 的属性 名称不能和类的属性名称重复
//     // get & set 的作用，是数据的安全性，防止被修改，或者计算要求较高的时候使用
//     get name() {
//         return this._name

//     }
//     set name(name) {
//         this._name = name
//     }
// }

//写法优化-（修饰符的简化写法）----------
// class B {
//     name: string;
//     constructor(name: string) {
//     }
// }
// 等价于
// class B {
//     constructor(public name: string) {
//     }
// }



// 定义函数，如果类型不明确，可以使用泛型，可定义多个泛型----------
// interface A {
//     length: number;
// }

// function B<T extends A>(a: T): number {
//     return a.length
// }
// B('111')



// 定义类时，类型不明确。也可使用泛型：泛型就是为了类型范用，让对象，方法，或者类适配性更广、高级抽象------------
// class Method<T> {
//     name: T;
//     constructor(name: T) {
//         this.name = name

//     }
// }

// const my = new Method<string>('222')