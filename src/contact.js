const createContact = () => {
  const contact = document.createElement("div");
  contact.classList.add("mainContent", "contact");
  const phoneNum = document.createElement("h3");
  phoneNum.textContent = "Contact us:";
  phoneNum.classList.add("contactInfo");
  const phoneNumContent = document.createElement("p");
  phoneNumContent.textContent = "(234) 235-5678";
  phoneNum.appendChild(phoneNumContent);
  const adress = document.createElement("h3");
  adress.textContent = "Or visit us:";
  adress.classList.add("contactInfo");
  const adressContent = document.createElement("p");
  adressContent.textContent = "579 Troy-Schenectady Road, Latham NY 12110";
  adress.appendChild(adressContent);
  contact.append(phoneNum, adress);
  return contact;
};
export { createContact };
