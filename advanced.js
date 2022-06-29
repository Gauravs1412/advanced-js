
//call method
var obj = {nums: 3};
var obj2 = {nums:5}

var addToThis = function(a,b,c){
    return this.nums + a+b+c
} 


// console.log(addToThis.call(obj, 3,2,1))

//apply , in this you  dont need to give parameter in function we can do it separatly

var arr = [1,2,3]

// console.log(addToThis.apply(obj,arr))
// console.log(addToThis.apply(obj2, arr))


//bind is little different than call and apply ,let's see how.

var bound = addToThis.bind(obj) // this thing will only gonna bind the object with the function

//in orderto execute it we need to console log it
console.log(bound(1,2,3))



//4th question

var student = {
    age : 20
}

var printAge = function(){
    return this.age
}

var result = printAge.bind(student)

console.log(result())

// function currying

let multiply = function(x,y){
    console.log(x*y)
}

let multiplyBYTwo = multiply.bind(this,2)

multiplyBYTwo(5);

//another way of doing function currying with the help of closures

let multiply1 = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyBYTwo1 = multiply1(2);
multiplyBYTwo1(3);


