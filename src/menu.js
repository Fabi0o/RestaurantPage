const createMenu = () => {
  const menu = document.createElement("div");
  menu.classList.add("mainContent", "menu");
  const pizzaOne = document.createElement("div");
  const pizzaTwo = document.createElement("div");
  const pizzaThree = document.createElement("div");
  const pizzaFour = document.createElement("div");
  pizzaOne.classList.add("menuItem");
  pizzaTwo.classList.add("menuItem");
  pizzaThree.classList.add("menuItem");
  pizzaFour.classList.add("menuItem");
  const pizzaOneTitle = document.createElement("h3");
  const pizzaTwoTitle = document.createElement("h3");
  const pizzaThreeTitle = document.createElement("h3");
  const pizzaFourTitle = document.createElement("h3");
  pizzaOneTitle.classList.add("pizzaTitle");
  pizzaTwoTitle.classList.add("pizzaTitle");
  pizzaThreeTitle.classList.add("pizzaTitle");
  pizzaFourTitle.classList.add("pizzaTitle");
  pizzaOneTitle.textContent = "Pizza#1";
  pizzaTwoTitle.textContent = "Pizza#2";
  pizzaThreeTitle.textContent = "Pizza#3";
  pizzaFourTitle.textContent = "Pizza#4";
  const pizzaOneContents = document.createElement("p");
  pizzaOneContents.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eligendi?";
  const pizzaTwoContents = document.createElement("p");
  pizzaTwoContents.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eligendi?";
  const pizzaThreeContents = document.createElement("p");
  pizzaThreeContents.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eligendi?";
  const pizzaFourContents = document.createElement("p");
  pizzaFourContents.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eligendi?";
  pizzaOne.append(pizzaOneTitle, pizzaOneContents);
  pizzaTwo.append(pizzaTwoTitle, pizzaTwoContents);
  pizzaThree.append(pizzaThreeTitle, pizzaThreeContents);
  pizzaFour.append(pizzaFourTitle, pizzaFourContents);
  menu.append(pizzaOne, pizzaTwo, pizzaThree, pizzaFour);
  return menu;
};
export { createMenu };
