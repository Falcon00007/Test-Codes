let title=document.querySelector("title");
title.textContent="DOM"

let head=document.getElementById("header-title");
head.textContent="DOM Manipulation";
head.style.border="solid 4px black";

let list=document.getElementsByClassName("list-group-item");
console.log(list);
list[1].textContent="Number 2";
list[2].style.backgroundColor = "green";

let li=document.getElementsByTagName("li");
console.log(li);
li[4].style.backgroundColor="red"

for(let i=0; i<list.length; i++){
    list[i].style.fontWeight="bold";
}

let item=document.querySelector("#addItems");
item.style.color="green";   
item.style.fontWeight="bold";

