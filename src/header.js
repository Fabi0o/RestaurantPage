const creatHeader = (image) => {
  const header = document.createElement("header");
  const heading = document.createElement("h1");
  const logo = new Image();
  logo.src = image;
  logo.classList.add("logo");
  header.appendChild(logo);
  heading.textContent = "Best Pizza Place Ever";
  header.appendChild(heading);
  return header;
};
export { creatHeader };
