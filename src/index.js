import "./style.css";
import Logo from "./logo.png";
import { creatHeader } from "./header.js";
const content = document.querySelector("#content");
const header = creatHeader(Logo);
content.appendChild(header);
