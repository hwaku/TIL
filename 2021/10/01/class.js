// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const hwaku = {name : 'hwaku', age: 20};
print(hwaku);

hwaku.hasJob = true;
console.log(hwaku.hasJob); // true

delete hwaku.hasJob;
console.log(hwaku.hasJob); // undefined

// 2. Computed properties
console.log(hwaku.name); // 코딩하는 순간 key의 해당하는 값을 받아올때
console.log(hwaku['name']); // 정확하게 어떤 key가 필요한지 모르고 runtime에서 결정해야할때
hwaku['hasJob'] = true;
console.log(hwaku.hasJob);

function printValue(obj, key){
    console.log((obj[key]));
}
printValue(hwaku, 'name');
printValue(hwaku, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2}
const person2 = {name: 'steve', age: 3}
const person3 = {name: 'dave', age: 4}
// 계속 객체를 생성하려면 어떻게해야할까?
function makePerson(name, age){
    return{
        /*name: name,
        age: age key 값과 value 값이 동일하다면 한개를 생략할 수 있다. */
        name,
        age,
    }
}
// 위에서 해결하고자하였던 문제점은 ?
// Object를 필요할때마다 생성하면 동일한 key와 value값을 불가피하게 반복 작성해주어야함
// 문제해결 방법 - value만 전달하면 Object가 생성되는 함수를 만들었다.

const person4 = makePerson('hwaku', 20);
console.log(person4);

// 4. Constructor Function
// 위와같이 다른 계산을 하지 않고 순수하게 Object를 생성하는 함수는
function Person(name, age){ // 함수명이 대문자로 시작하며
    // 여기서 생략된 부분은 새로운 Objcet에서 this에 {} name이라는 새로운 property를 넣고
    // this를 리턴하는 함수이다.
    // this = {}; return this
    this.name = name; // constructor 처럼
    this.age = age;
}
const person5 = new Person('hwaku', 20); // class에서 Objcet를 만드는것 처럼
console.log(person4);

// 5. in operator: property existence check (key in obj)
// 해당하는 key가 object 안에 있는지 확인

console.log('name' in hwaku); // true
console.log('age' in hwaku); // true
console.log('random' in hwaku); // false
console.log(hwaku.random); // 없는 key로 object에 접근하게되면 undefined

// 6. for..in vs for..of

// for (key in obj)
console.clear(); // console창을 정리해주는 함수
// 모든 key를 받아와서 처리하고 싶을때 사용
for (key in hwaku){
    console.log(key)
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}
// 위는 출력은 될테지만 좋은 방법이 아니다. 아래 코드와 같이 바꿀 수 있다.
for(value of array){
    console.log(value);
}

// 7. Fun coning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder'; // user와 user2의 name이 변경되어 버린다. 자바에서 얕은복사라고 생각할 수 있다.
console.log(user);

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key]; // user3의 key값에 user의 key값이 복사된다.
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);
// 위를 아래처럼 바꿀 수 있다.
const user4 = Object.assign({}, user);
console.log(user4);

const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
