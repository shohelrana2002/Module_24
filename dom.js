const main = document.getElementById("main");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "Student Details";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Tangil Polytechnic Institute";
ul.appendChild(li1);
section.appendChild(ul);
const li2 = document.createElement("li");
li2.innerText = "Telecommunication";
ul.appendChild(li2);
section.appendChild(ul);
const li3 = document.createElement("li");
li3.innerText = "Last Year";
ul.appendChild(li3);
section.appendChild(ul);
main.appendChild(section);
const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid orange";
  section.style.borderRadius = "10px";
  section.style.padding = "10px";
  section.style.fontFamily = "tahoma";
  section.style.lineHeight = "1.5";
}

const bg = document.getElementById("light-gary");
bg.style.background = "orange";
bg.style.color = "green";

const lis = document.getElementsByClassName("li-bg");
for (const li of lis) {
  li.style.color = "red";
  li.style.fontFamily = "Italic";
}
