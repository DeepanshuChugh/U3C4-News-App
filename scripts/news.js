// Ude Import export (MANDATORY)

import  navbar  from "../components/navbar.js";
import {search} from "./fetch.js"

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#search_input").addEventListener("keydown", search );

let localData = JSON.parse(localStorage.getItem("info"));
console.log(localData);

let result = document.querySelector("#detailed_news");

let img = document.createElement("img");
img.src = localData.urlToImage;
img.style.width = "700px";
img.style.height = "500px";

let name1 = document.createElement("h3");
name1.innerText = localData.title;
name1.style.height="35px"

let content = document.createElement("p");
content.innerText = localData.content;
content.style.width = "900px";

result.append( img, content);