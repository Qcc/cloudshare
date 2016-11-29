"use strict";
// document.getElementById("btn").addEventListener("click",clickMe);

function clickMe() {
    var list = document.getElementsByClassName("list")[0];
    if(list){
        list.className="active";
    }
    list = null;
}

console.log("run...");

window.onload = function(){
   document.getElementById("myBtn").addEventListener("mouseover", clickMe);
}