import "./style.css";
import Logo from "./logo.png";
import { createHeader } from "./header.js";
import { createNav } from "./nav";
import { createFirstPara, createSecondPara } from "./home";
const content = document.querySelector("#content");
content.append(createHeader(Logo), createNav());
const mainContent = document.createElement("div");
mainContent.classList.add("mainContent");
content.appendChild(mainContent);
mainContent.append(createFirstPara(), createSecondPara());
