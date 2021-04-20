class Dog {
    constructor(name ,age) {
     this.name = name
     this.age = age
    }
    
    eat() {
      console.log('狗喜欢吃骨头，年龄为',this.age)
    }
  }
//原型的写法和上面相同

function Dog1(name, age) {
    this.name = name
    this.age = age
  }
  Dog1.prototype.eat = function() {
    console.log('狗喜欢吃骨头，年龄为',this.age)
  }

//原型链  构造函数 原型对象 实例 三者的关系
let dog = new Dog('gougou','1')
console.log(Dog.prototype.constructor === Dog)
console.log(Dog.prototype === dog.__proto__)
//在寻找实例上的属性或者方法时，会去实例的__proto__ 就是原型对象去寻找，如果找不到就去原型对象的__proto__去寻找