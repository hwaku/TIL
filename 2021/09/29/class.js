'use strict';

// 1. class declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //method
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age
        // 위에 this.age는 매개변수가 없으므로 get age를 호출하게 되고
        // age는 set age를 호출하게 된다.
        // 무한루프를 막기 위해서는 겟터셋터 안에 age는 이름을 다르게 해줘야한다.
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Strve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private) 너무 최신 버전이라 지원되는지 확인 후 사용해야함
class Experiment {
    // 그냥 선언하면 public이 default 값
    publicField = 2;
    // #을 붙이면 private으로 선언되며 클래스 외에서 접근 불가.
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and method
// object, data에 상관없이 공통적, 반복적으로 사용되는 값을 이용할때 static을 사용한다.
class Article {
    static publisher = 'Dream Coding';
    // 자바에서 클래스명으로 생성자를 생성하는 것과 같이
    // JS에서는 constructor를 통해 생성자를 사용해야한다. 문법처럼 외우기!
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}

const article11 = new Article(1);
const article12 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {
}

class Triangle extends Shape {
    draw() {
        console.log('▲')
    }

    getArea() {
        return (this.width * this.height) / 2;
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // ▲
console.log(triangle.getArea()); // 200

// 6. Class checking: instanceOf
// 생성자, 객체, 클래스 비교시 사용한다.
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());