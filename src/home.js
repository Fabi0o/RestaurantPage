const createHome = () => {
  const home = document.createElement("div");
  home.classList.add("mainContent", "home");
  const firstPara = document.createElement("p");
  firstPara.textContent = "Don't look further, your favorite pizza is here!";
  const secondPara = document.createElement("p");
  secondPara.textContent = "Call us or order online.";
  home.append(firstPara, secondPara);
  return home;
};
export { createHome };
