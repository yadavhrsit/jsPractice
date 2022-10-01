// console.log("AJAX TUTORIAL");
// let fetchBtn = document.getElementById("fetchbtn");
// fetchBtn.addEventListener('click',buttonClickHandler);

// function buttonClickHandler(){
//     console.log("Button clicked");
//     // Instantiate an XHR Object
//     const xhr = new XMLHttpRequest();
//     // Open the Object
//     xhr.open('GET','me.txt',true);

//     // On Progress
//     xhr.onprogress = function(){
//         console.log("On Progress...");
//         document.getElementById("container").innerText="Loading..";
//     }

//     // When Response is Ready
//     xhr.onload = function(){
//         if(this.status === 200){
//             console.log(this.responseText);
//             document.getElementById("container").innerText=xhr.response;
//         }
//         else {
//             console.log("Error Occured");
//             document.getElementById("container").innerText="Error Occured";
//         }
       
//     }

//     // Send the Request
//     xhr.send();
// }

// console.log("AJAX TUTORIAL");
// let fetchBtn = document.getElementById("fetchbtn");
// fetchBtn.addEventListener('click',buttonClickHandler);

// function buttonClickHandler(){
//     console.log("Button clicked");
//     // Instantiate an XHR Object
//     const xhr = new XMLHttpRequest();
//     // Open the Object
//     // POST Request
//     xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
//     xhr.getResponseHeader('content-type','application/json','retry-after','7200');

//     // On Progress
//     xhr.onprogress = function(){
//         console.log("On Progress...");
//         document.getElementById("container").innerText="Loading..";
//     }

//     // When Response is Ready
//     xhr.onload = function(){
//         if(this.status === 200){
//             console.log(this.responseText);
//             document.getElementById("container").innerText="Data Send Successfully";
//         }
//         else {
//             console.log("Error Occured");
//             document.getElementById("container").innerText="Error Occured";
//         }
       
//     }

//     // Send the Request
//     params = `{"name":"qweqweqvv","salary":"666","age":"23"}`;
//     xhr.send(params);

// }




let loadbtn=document.getElementById("loadbtn");
loadbtn.addEventListener('click',loadData);

function loadData(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://dummyjson.com/products/1',true);
    xhr.onload = function(){
        if(this.status===200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            var info="<ul>";
            for (key in obj){
                info+="<li>"+key+" : "+obj[key]+"</li>";
                document.getElementById("container").innerHTML=info;
            }
            info+="</ul>";
        }
        else {
            console.log("some error occured");
        }
    }

    xhr.send();
        
}