// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// console.log(mainHeading.innerText);
// mainHeading.textContent="This is Changed Main Heading";
// console.log(mainHeading.textContent);

            // Change Style of elements
// const mainHeading = document.querySelector("div.headline h2");
// mainHeading.style.color="indigo";
// mainHeading.style.backgroundColor="grey";


             // get and set attribute
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

// link.setAttribute("href","https://google.com");


            // get multiple elements using getElements by class name
// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems);
// const navItems2 = document.querySelectorAll(".nav-item");
// console.log(navItems2);

            // get multiple elements using getElements by Tag name
// const navItems = document.getElementsByTagName("a");
// for(let i=0;i<navItems.length;i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
// }

// let navItems = document.querySelectorAll("a");
// console.log(navItems);
// for (let navitem of navItems){
//     navitem.style.backgroundColor="white";
//     navitem.style.color="red";
// }
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor="white";
//     navItem.style.color="blue";
// })

            // convert node items or HTML collection to array
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));

            // InnerHTML
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner HTML Changed</h1>";
// headline.innerHTML += "<h2>Inner HTML Added</h2>";
// headline.innerHTML += "<button class = \"btn\">Learn More</button>"

            // classList, add and remove, toggle classes
// const sectionTodo  = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add("bg-dark");
// sectionTodo.classList.remove("bg-dark");
// console.log(sectionTodo.classList.contains("container"));
// sectionTodo.classList.toggle("bg-dark");

// const header = document.querySelector(".header");
// header.classList.add("bg-dark");


            // add HTML element using Javascript   
// const todoList = document.querySelector(".todo-list");
// todoList.innerHTML += "<li>New Todo</li>";

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Students");
// const todoList = document.querySelector(".todo-list");
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach People";
// todoList.prepend(newTodoItem);

            // before & after
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach People";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);

            // insert Adjascent HTML
// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend","<li>Teach everyone</li>");