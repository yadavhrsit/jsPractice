            // For Of Loop

// const fruits = ["Apple","Mango","Banana"];
// for (let fruit of fruits){
//      console.log(fruit); 
// }

            // For In Loop

// for (let fruit in fruits){
//      console.log(fruits[fruit]); 
// }

            // Array Destructuring

// const myArray = ["Value1","Value2","Value3"];
// let [Val1,Val2,Val3]=myArray;
// let [Val4]=myArray;
// let [,,Val5]=myArray;
// let [...Val6]=myArray;
// let [,...Val7]=myArray;
// console.log(Val7);

            // Intro to Objects

// let Person = {
//     Name:"Harshit",
//     Age:22,
//     Gender:"Male",
//     Degrees: ["BCA","MCA"],
//     Year:Passing = {
//         BCA:2020,
//         MCA:2022
//     }
// };
// Person.Course="FSD";
// Person["City"]="Lucknow";
// Person["Birth Month"]="September";
// console.log(Person["Birth Month"]);
// const newkey = "Date";
// Person[newkey] = "H8ydv@gmail.com";
// console.log(Person);

            //How to Iterate Object

// for (let key in Person){
//     console.log(key);
//     console.log(Person[key]);
//     console.log(`${key} : ${Person[key]}`) 
// }
// console.log(Object.keys(Person));
// for(let key of Object.keys(Person)){
//     console.log(Person[key]);
// }

            //Computed Properties

// const key1 = "objKey1";
// const key2 = "objKey2";
// const key3 = "objKey3";

// const val1 = "myval1";
// const val2 = "myval2";
// const val3 = "myval3";
// const val4 = "myval4";
// const val5 = "myval5";

// let keysArray =[key1,key2,key3];
// let valArray =[val1,val2,val3,val4,val5];

// const obj2 = {

// };

// for (let i=0; i<keysArray.length;i++){
//     obj2[keysArray[i]]=valArray[i];
// }
// console.log(obj2);


            //Spread Operator in Array & Objects

// const array1 = [1,3,5];
// const array2 = [2,4,6];
// const str1 = "myString";
// const newArr = [...array1,...array2,...str1];
// console.log(newArr);
// console.log(typeof(str1));

// const obj3 = {
//     key1:"value1",
//     key2:"value2"
// };

// const obj4 = {
//     key3:"value3",
//     key4:"value4",
//     key5:"value5",
//     key6:"value6"
// };

// const newObj = {...obj3,...obj4,..."ASDF"};
            
            //Object Destructuring

// let { key1,key2 } = obj3;
// let { key4:var1, key3:var2 } = obj4;
// let {key3,key4,...props}=obj4;
// console.log(props);

            //Objects inside Array

// const users = [
//     {
//         userId:1,
//         firstName:"Harshit",
//         lastName:"Yadav",
//         age:22
//     },
    
//     {
//         userId:2,
//         firstName:"asdfg",
//         lastName:"qwerty",
//         age:24
//     },
    
//     {
//         userId:3,
//         firstName:"zxcv",
//         lastName:"uiop",
//         age:26
//     }
// ]

// for (let user of users){
//     console.log(user.userId);
// }

            //Nested Destructuring

// const[{userId:firstUser,firstName,lastName},{age},{userId}] = users;
// console.log(firstUser,firstName,lastName,age,userId);

            //Function Expressions

// const print = function(){
//     console.log("Hello");
// }
// print();

            //Arrow Functions

// const varSum = (a,b) => {
//     console.log(a+b);
// }
// varSum(1,4);

// const aSquare = a => {
//     console.log(a*a);
// }
// aSquare(5);

// const aCube = a => a*a*a;
// console.log(aCube(5));

            
            // Default Parameters

// const addTwo =  (a=3,b=5) =>  a+b;
// console.log(addTwo(1,2));
// console.log(addTwo());


            // Rest Parameters

// const prntNumbers = (a,b,...c) =>{
//     console.log("A: ",a," ", "B: ",b," ","C: ",c )
//     console.log(Array.isArray(c));
// }
// prntNumbers(1,2,3);
// const arrNew = [5,6,7,8,9];
// prntNumbers(...arrNew);
// prntNumbers(11,12,13,14,15,10,90,32);

            // Parameter Destructuring

// const person = {
//     firstName:"Harshit",
//     lastName:"Yadav",
//     Age:22
// };

//  const printDetails = ({firstName,lastName}) => { 
//  console.log(firstName,lastName);
//  }

// const printDetails2 = ({firstName:fName,lastName:lName}) => { 
//     console.log(fName,lName);
// }
// printDetails(person);
// printDetails2(person);

            // Callback functions

// function myFunc2 (){
//     var z=10;
//     console.log("My Func2 Function");
// }

// function myFunc (a){
//     console.log("My Func is called");
//     console.log(a);
//     a();
// }

// myFunc(myFunc2);


            // Function returning Function

// const anotherFunction = () => {
//     const square = (z) => z*z;
//     return square;
// }
// const ans = anotherFunction();
// console.log(ans(5));




// const anotherFunction = (a) => {
//     a=a+a;
//     const square = (z) => z*z;
//     return {
//         square,
//         a
//     };
// }

// const obj = anotherFunction(2);
// console.log(obj.square(obj.a));

// const {square:fn,a:val}=anotherFunction(2);
// console.log(fn(val));

// const {func,valu}=anotherFunction(2);
// console.log(func(valu));



