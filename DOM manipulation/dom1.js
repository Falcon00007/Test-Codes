// let title=document.querySelector("title");
// title.textContent="DOM"

// let head=document.getElementById("header-title");
// head.textContent="DOM Manipulation";
// head.style.border="solid 4px black";

// let list=document.getElementsByClassName("list-group-item");
// console.log(list);
// list[1].textContent="Number 2"; 

// let li=document.getElementsByTagName("li");
// console.log(li);
// li[4].style.backgroundColor="red"

// for(let i=0; i<list.length; i++){
//     list[i].style.fontWeight="bold";
// }

// let item=document.querySelector("#addItems");
// item.style.color="green";   
// item.style.fontWeight="bold";

// let secondList=document.querySelector(".list-group-item:nth-child(2)");
// secondList.style.backgroundColor="green";

// let thirdList=document.querySelector(".list-group-item:nth-child(3)");
// thirdList.style.color="transparent";

// let item2=document.querySelectorAll(".list-group-item")
// item2[1].style.color="green";

// var odd=document.querySelectorAll("li:nth-child(odd)");
// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor="green";
// }

let item=document.querySelector("#items");
console.log(item.parentNode);
item.parentNode.style.backgroundColor="yellow";

//console.log(items.childNodes);
console.log(item.children);
item.children[1].style.color="red";

console.log(item.firstChild);  //not used because it counts spaces and line breaks in index;
item.firstElementChild.textContent="Number 1";
item.lastElementChild.textContent="Number 5";

console.log(item.nextSibling); //this is also not preferred because it also counts line breaks in index
console.log(item.nextElementSibling);
console.log(item.previousElementSibling.previousElementSibling);

let newEle=document.createElement("div");
newEle.className="new";
newEle.id="newEle";
newEle.setAttribute("title", "new div");

let newText=document.createTextNode("Hey There!!!");
newEle.appendChild(newText);
let container=document.querySelector("header .container");
let h2= document.querySelector("header h1");
container.insertBefore(newEle, h2); 
console.log(newEle)
















