const createFirstPara = () => {
  const firstPara = document.createElement("p");
  firstPara.textContent = "Don't look further, your favorite pizza is here!";
  return firstPara;
};
const createSecondPara = () => {
  const secondPara = document.createElement("p");
  secondPara.textContent = "Call us or order online.";
  return secondPara;
};
export { createFirstPara, createSecondPara };
