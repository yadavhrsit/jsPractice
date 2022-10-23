            // Foundation
            // setTimeout & clearTimeout
// console.log("Script start");
// const id = setTimeout(()=>{
//     console.log("set timeout print");
// },1000);

// const id2 = setTimeout(()=>{
//     console.log("set timeout print2");
// },1000);

// for (let i=1;i<100;i++){
//     console.log("...");
// }

// console.log("id of set time out is : ", id);
// console.log("id2 of set time out is : ", id2);
// console.log("clearing timeout");
// clearTimeout(id);
// console.log("script end");


// setInterval
// console.log("script start");
// setInterval(() => {
//     console.log(Math.random());
// }, 1000);
// console.log("script end");


            // understanding callbacks
// function myFunc(callback){
//     console.log("My function 1 is called");
//     console.log(callback());
// }
// myFunc(()=>"My function 2 is called"
// );

// function addTwoNums(num1,num2,onSuccess,onFailure){
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         onSuccess(num1,num2);
//     }
//     else{
//         onFailure();
//     }

// }
// addTwoNums(1,4,(num1,num2)=>{
//     console.log(num1+num2);
// },()=>{
//     console.log("Integer type only allowed");
// });
// const headings = document.querySelectorAll("h1");
// let counter=0;
// const id = setInterval(()=>{
//     headings[counter].innerText = `Heading ${counter+1}`;
//     if(counter === 4) clearInterval(id);
//     counter++;
// },2000);


                // Promises
// produce promise
// const bucket = ['coffee','chips','salt','vegetables','rice'];

// const firedRicePromise = new Promise((resolve, reject) => {
//     if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
//         resolve("Fried Rice is cooked");
//     }
//     else reject("Items unavailable");
// });

// const coffeePromise = new Promise((resolve, reject) => {
//     if(bucket.includes("milk") && bucket.includes("coffee")){
//         resolve("milk","coffee");
//     }
//     else reject("Items Unavailable");

// });

// // consume promise
// firedRicePromise.then((output)=>{
//     console.log(output);
// },(error)=>{
//     console.log(error);
// });

// coffeePromise.then((output)=>{
//     console.log(output);
// }).catch((error)=>{
//     console.log(error);
// });


// function returning promise
// function friedricepromise(){
//     const bucket = ['coffee','chips','salt','vegetables','rice'];
//     return new Promise((resolve, reject) => {
//         if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
//             resolve("Fried Rice is cooked");
//         }
//         else reject("Items unavailable");
//     });

// }
// friedricepromise().then((output)=>{
//     console.log(output);
// },(error)=>{
//     console.log(error);
// });

// promise && setTimeout
// function myPromise (){
//     return new Promise((resolve, reject) => {
//         const val = true;
//         setTimeout(()=>{
//             if(val)resolve();
//             else reject();
//         },2000);
//     });
// }

// myPromise()
// .then(()=>{console.log("resolve")})
// .catch(()=>{console.log("reject")});


// Promise.resolve and Promise chaining
// function myPromise(){
//     return new Promise((resolve,reject) => {
//         resolve("Ha");
//     })
// }

// myPromise()
//     .then((value)=>{
//         value+="rs";
//         return value;
//     }
//     )
//     .then((value)=>{
//         value+="hit";
//         return Promise.resolve(value);
//     }
//     )
//     .then((value)=>{
//         console.log(value);
//     })


            // AJAX

// XHR

// const URL = "https://jsonplaceholder.typicode.com/users";
// const xhr = new XMLHttpRequest();
// step 1 - use open() method
// xhr.open("GET",URL);
// method 1
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//     }
// }

// method 2
// xhr.onload = function(){    // only runs when ready state is 4
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }

// xhr.send();

// Error Handling in XHR
// let URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET",URL);
// xhr.onload = ()=>{
//     if(xhr.status >= 200 && xhr.status <300){
//         const data = JSON.parse(xhr.response);
//         const id = data[3].id;
//         const xhr2 = new XMLHttpRequest();
//         const URL2 = `${URL}/${id}`;
//         xhr2.open("GET",URL2);
//         xhr2.onload = () =>{
//             const data2  = JSON.parse(xhr2.response);
//             console.log(data2);
//         }
//         xhr2.send();

//     }
//     else{
//         console.log("Something Went Wrong");
//     }
// }

// xhr.onerror = ()=>{
//     console.log("Network Error");
// }


// xhr.send();

// Promisifying above code // XHR Using Promises

const URL = "https://jsonplaceholder.typicode.com/posts";
function sendRequest(method,url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function(){
            if (xhr.status >=200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("Something went wrong"));
            }
        }
        xhr.onerror = ()=>{
            reject(new Error("Network Error"));
        }

        xhr.send();
    })
}

sendRequest("GET",URL)
.then(response => {
    const data = JSON.parse(response);
    /* console.log(data); */
    return data;
}
)
.then(data =>{
    const id = data[3].id;
    return id;
}
)
.then(id=>{
    const url = URL+"/"+id;
    return sendRequest("GET",url);
}
)
.then(newResponse =>{
    const newData = JSON.parse(newResponse);
    console.log(newData);
}
)

.catch(error => {
    console.log(error);
})
