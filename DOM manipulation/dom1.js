let title=document.querySelector("title");
title.textContent="DOM"

let head=document.getElementById("header-title");
head.textContent="DOM Manipulation";
head.style.border="solid 4px black";

let list=document.getElementsByClassName("list-group-item");
console.log(list);
list[1].textContent="Number 2"; 

let li=document.getElementsByTagName("li");
console.log(li);
li[4].style.backgroundColor="red"

for(let i=0; i<list.length; i++){
    list[i].style.fontWeight="bold";
}

let item=document.querySelector("#addItems");
item.style.color="green";   
item.style.fontWeight="bold";

let secondList=document.querySelector(".list-group-item:nth-child(2)");
secondList.style.backgroundColor="green";

let thirdList=document.querySelector(".list-group-item:nth-child(3)");
thirdList.style.color="transparent";

let item2=document.querySelectorAll(".list-group-item")
item2[1].style.color="green";

var odd=document.querySelectorAll("li:nth-child(odd)");
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor="green";
}