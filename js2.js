            //  Closures
            //  Example 1
// function printFullName(firstName,lastName){
//     function printName(){
//         console.log(firstName,lastName);
//     }

//     return printName;
// }
// const ans=printFullName("Harshit","Yadav");
// ans();

            // Example 2

// function hello(x){
//     const a ="VarA";
//     const b = "VarB";
//     return function(){        // returning with x as it is present in its lexical environment 
//         console.log(a,b,x);
//     }
// }
// const ans = hello("arg");
// ans();

            // Example 3

// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);

            // Example 4

// function func(){
//     var counter=0;
//     return function myFunc(){
//         if(counter==0)
//     {
//         counter++;
//         console.log("Hi You called me");
        
//     }
//     else {
//         console.log("I have been alreay called");
//     }
        
//     } 

// } 

// const myfunc = func();
// myfunc();
// myfunc();
// myfunc();
// const myfunc2 = func();
// myfunc2();
// myfunc2();
// myfunc2();

