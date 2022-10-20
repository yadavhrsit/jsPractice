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

            // Clone Nodes
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// ul.append(li);
// ul.prepend(li);     // This wont work ,we can either prepend or append

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true);      // true argument for deep cloning
// ul.append(li);                       // or li will be created without text
// ul.prepend(li2);     


            // static list vs Live list
// const listItems = document.querySelectorAll(".todo-list li");
// const sixthli = document.createElement("li");
// sixthli.textContent = "item6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthli);
// console.log(listItems);
// const listItems2 = ul.getElementsByTagName("li");
// console.log(listItems2);


                // Practice with Click events
// const allButtons = document.querySelectorAll(".todo-btn");
// allButtons.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget.textContent);
//         e.target.style.backgroundColor = "grey";
//         e.target.style.color = "white";
//      })
// })      
                // keypress & mouseover
// const body = document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e);
//     console.log(e.currentTarget,e.target);
// })
// const learMoreBtn=document.querySelector(".btn-headline");
// learMoreBtn.addEventListener("mouseover",()=>{
//     console.log("mouseover event occured");
// })
// learMoreBtn.addEventListener("mouseleave",()=>{
//     console.log("mouseleave event occured");
// })


                // Event Bubbling 
// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// capturing events
// child.addEventListener("click",()=>{
//     console.log("Captured child");
// },true);
// parent.addEventListener("click",()=>{
//     console.log("Captured Parent");
// },true);
// grandparent.addEventListener("click",()=>{
//     console.log("Captured grandParent");
// },true);

// Capturing (first)===>(then) Bubbling ( Left to Right )

// Not capturing
// child.addEventListener("click",()=>{
//     console.log("Bubbled child");
// });
// parent.addEventListener("click",()=>{
//     console.log("Bubbled Parent");
// });
// grandparent.addEventListener("click",()=>{
//     console.log("Bubbled grandParent");
// });


            // Event Delegation
// grandparent.addEventListener("click",(e)=>{
//     console.log(e.target.textContent,"you clicked");
// })

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-btn");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
        </div>
        `;
    newLi.innerHTML = newLiInnerHtml;
    /* todoList.append(newLi); */
    todoInput.value="";
});
todoList.addEventListener("click",function(){
    if(e.target.classList.contains("remove")){
        /* const removeLi = e.target.parentNode.parentNode;
        removeLi.remove(); */
        console.log(this);
    }
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
});

