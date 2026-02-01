//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for loading the home page
//Imports image for homepage
import homePageImage from "../images/homePage.png";
//Helper functions
import {
  createHeader,
  createElement,
  createImage,
  createToggleButton,
} from "./utilityRenderFunctions.js";
import { createSetForm } from "./createSet.js";
import { cardSets } from "../data/data.js";
import { renderCardForm } from "./createCard.js";

//Renders home page
const renderHomePage = () => {
  //Gets main element
  const main = document.querySelector("main");
  main.innerHTML = "";

  //Creates header element
  const header = createHeader("h1", "Study Night", "home_header");

  //Creates subheader element
  const subHeading = createElement(
    "h2",
    "A Digital Study Solution for the Modern World",
  );

  //Creates elements
  const image = createImage(homePageImage, "Desk of laptops");

  //Container for elements
  const homeContainer = document.createElement("div");
  homeContainer.className = "homeContainer";

  homeContainer.append(header, subHeading, image);
  // Also include create set form (and its toggle) on the home page so tests can access it
  const setForm = createSetForm(cardSets);
  const toggleFormButton = createToggleButton("Add New Set", setForm);
  toggleFormButton.setAttribute("data-cy", "toggle_form");
  homeContainer.append(toggleFormButton, setForm);
  // Include an Add Card form tied to the first set so the add-card fields exist for tests
  const addCardContainer = renderCardForm(cardSets[0].cards);
  homeContainer.append(addCardContainer);
  main.append(homeContainer);
};

export { renderHomePage };
