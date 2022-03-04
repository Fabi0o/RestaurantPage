import "./style.css";
import Logo from "./logo.png";
import { createHeader } from "./header.js";
import { createNav } from "./nav";
import { createHome } from "./home";
import { createMenu } from "./menu";
const content = document.querySelector("#content");
content.append(createHeader(Logo), createNav(), createHome());

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

homeBtn.addEventListener("click", () => {
  const mainContent = document.querySelector(".mainContent");
  mainContent.remove();
  content.append(createHome());
});

menuBtn.addEventListener("click", () => {
  const mainContent = document.querySelector(".mainContent");
  mainContent.remove();
  content.append(createMenu());
});

contactBtn.addEventListener("click", () => {
  alert("WIP");
});
