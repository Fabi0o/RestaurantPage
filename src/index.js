import "./style.css";
import Logo from "./logo.png";
import { createHeader } from "./header.js";
import { createNav } from "./nav";
import { createHome } from "./home";
const content = document.querySelector("#content");
content.append(createHeader(Logo), createNav(), createHome());