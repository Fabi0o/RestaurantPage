const createNav = () => {
  const nav = document.createElement("nav");
  const list = document.createElement("ul");
  const item1 = document.createElement("li");
  const item2 = document.createElement("li");
  const item3 = document.createElement("li");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  menuBtn.textContent = "Manu";
  contactBtn.textContent = "Contact";
  homeBtn.classList.add("navBtn");
  menuBtn.classList.add("navBtn");
  contactBtn.classList.add("navBtn");
  item1.appendChild(homeBtn);
  item2.appendChild(menuBtn);
  item3.appendChild(contactBtn);
  list.append(item1, item2, item3);
  nav.appendChild(list);
  return nav;
};
export { createNav };
