/* Here goes your JS code */
const btn = document.querySelector(".btn");

const p = document.querySelector(".main p");

const popup = document.querySelector("div.popup");

const X = document.querySelector("div.X");

const input = document.getElementById("button");

btn.addEventListener("click",()=>{
popup.style.display = "block";
})

X.addEventListener("click",()=>{
    popup.style.display = "none";
})

input.addEventListener("click", ()=>{
    popup.style.display = "none";
    p.style.display= "block";
    btn.style.display = "none";
})