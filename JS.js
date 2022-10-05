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


            // Important Array Methods

            // For Each
// const numbers = [2,4,6,8];

// const FunC = (number,index,arr) => {
//     console.log(`Index is ${index} Number is ${number}`)
//     console.log(arr); 
//     }

// numbers.forEach(FunC); //first value,its index,whole array
// numbers.forEach(function(num,index){
//     console.log(`Index is ${index} Number is ${num}`)

// });

// const users = [
//     {firstName: "Harshit", age:22},
//     {firstName: "Harsh", age:23},
//     {firstName: "shit", age:24},
// ]

// users.forEach((user)=>{
//     console.log(user.age);
// })

            // Map Method

// array = [1,3,5,7,9];
// const square = (num) => num*num;
// function sum (num) {
//     return num+num;
// }
// var newArr = array.map(sum);  //CREATES ARRAY OF RETURN
// console.log(newArr);
// var newArr2 = array.map(square)
// console.log(array.map(square));

// const userCredentials = [
//     {userName:"Harshit",password:"abcd@1234"},
//     {userName:"Abcd",password:"pqrst@8901"},
//     {userName:"Xyz",password:"ijkl@4567"}
// ]
  
// const output = userCredentials.map(function(user){
//     console.log(user.userName,user.password);
//     return user.userName;
// })


            // Filter Method

// const randomNumbers=[1,2,3,4,5,6,7,8];
// const checker = (randomNumber)=>randomNumber%2==0;
// const evenNumbers = randomNumbers.filter(checker);
// console.log(evenNumbers);

            // Reduce Method

// const someNumbers = [2,4,15,20,25];
//     //  accumulator ,    currentValue ,    return
//     //      2        +       4        =      6
//     //      6        +       15       =      21
//     //      21       +       20       =      41
//     //      41       +       25       =      66
// const sum = someNumbers.reduce((accumulator,currentValue)=>accumulator+currentValue);
// console.log(sum);

// const userCart = [
//     {pId:11929,pName:"Phone",price:25000},
//     {pId:023423,pName:"Earphone",price:3000},
//     {pId:002344,pName:"Watch",price:12000},
//     {pId:502714,pName:"Charger",price:1000},
//     {pId:88106,pName:"Cover",price:1600}
// ]
// const totalAmount = userCart.reduce((totalPrice,currentProduct)=>{
//     return currentProduct.price+totalPrice;
//     },0
// );
// console.log(totalAmount);

            // Find

// const myArray = ["hello","cat","dog","apple"];
// function isLen3(string){
//     return string.length === 3;
// }
// console.log(myArray.find(isLen3));

            // Every
// const numbers = [1,3,4,5,7,8,9];

// let output = numbers.every((number)=>number%2===0);
// console.log(output);

             // Some

// const userCart = [
//     {pId:1,pName:"Laptop",price:48000},
//     {pId:2,pName:"Smartphone",price:18000},
//     {pId:3,pName:"TV",price:88000},
//     {pId:4,pName:"Headphone",price:6000}
// ];

// let ans = userCart.some((cartItem)=>cartItem.price<50000)
// console.log(ans);

            // Fill
// const myArray = new Array(10).fill(-1);
// console.log(myArray);
// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(0,3,6);
// console.log(myArray);

            // Splice
// const myArray = ['item1','item2','item3'];
//  myArray.splice(0,2);
//  console.log(myArray);
// myArray.splice(3,0,'item4');
//  console.log(myArray);
// let delItem = myArray.splice(1,2,'replaced');
// console.log(myArray);
// console.log(delItem);

            // Iterables (array like Objects)
            // Sets
// const numbers =  new Set([1,2,3,"abcd",[4,5,6]]);
// const newNumbers  = new Set([1,2,3,3]);
// console.log(numbers.has(2));
// console.log(newNumbers);
// var arr = [1,2,3,4,1,2,8];
// arr=new Set(arr);
// console.log(arr);

            // Map
// const person =  new Map();
// person.set('firstname','Harshit');
// person.set(1,'One');
// person.set('lastname','Yadav');
// console.log(person.get(1));
// console.log(person.keys());
// for (let key of person.keys()){
//     console.log(key);
// }

// for (let key of person){
//     console.log(key);
// }

// for (let [key,value] of person){
//     console.log(key,value);
// }

// const person1 = {
//     id:1,
//     firstName: "Harshit"
// }

// const userInfo = new Map();
// userInfo.set(person1,{age:8,gender:"male"});
// console.log(userInfo) ;
// console.log(userInfo.get(person1).gender) ;

            // Functions inside Objects

// const person = {
//     fName: "Harshit",
//     lName: "Yadav",
//     about: function(){
//         console.log(`person name is ${this.fName}`);
//     }
// }

// person.about();

            //call,apply,bind methods

// const user1 = {
//     Name:"Harshit",
//     id:01,
//     about:function(age,hobby){console.log(this.Name,age,this.id,hobby)}
// };
// const user2 = {
//     Name:"Mohit",
//     id:02
// };
// user1.about(22,"coding");
// user1.about.call(user2,22,"coding");
// user1.about.apply(user2,[22,'programming']);
// const func = user1.about.bind(user1,22,"coding");
// func();


            //this doesnt works with Arrow Function 
// const user1 = {
//         Name:"Harshit",
//         id:01,
//         about:()=>{console.log(this.Name)}
//      };

//      user1.about();





/////////////////////////////////////


// const userMethods = {
//     userData:function(){
//         return `${this.Name}'s contact number is ${this.Phone}`
//     },
//     is18:function(){
//         return this.Age>=18;
//     }
// }

function createUser(name,email,age,phone){
    /* const user=Object.create(createUser.prototype); */
    this.Name=name;
    this.Email=email;
    this.Age=age;
    this.Phone=phone;
}

createUser.prototype.userData = function(){
    return `${this.Name}'s contact number is ${this.Phone}`
};
createUser.prototype.is18 = function(){
    return this.Age>=18;
}

function userRegistration(username,email,age,contact){
    users.push(new createUser(username,email,age,contact));
}

let users=[];
userRegistration("h8ydv","h8ydv@me.com",22,9695123138);
userRegistration("h9ydv","h8ydv@me.com",22,9695123138);
userRegistration("h10ydv","h8ydv@me.com",22,9695123138);
userRegistration("h11ydv","h8ydv@me.com",22,9695123138);
userRegistration("h12ydv","h8ydv@me.com",22,9695123138);
console.log(users[0]);

            //New
// function createUser(firstName,age){
//     this.firstName=firstName;
//     this.age=age;
// }
// var users=[];
// users.push(new createUser("Harshit",22));
// console.log(users[0].age);