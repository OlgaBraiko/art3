import modals from "./modal";

import slides from "./sliders";

import form from "./forms";

import showMoreStyles from "./showMoreStyles";

import mask from "./mask";

import calc from "./calculator";

import filter from "./filter";

import pictureSize from "./pictureSize";

import burger from "./burger";

import accordion from "./accordion";

import drop from "./drop";

window.addEventListener("DOMContentLoaded", () => {
  modals();

  slides(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );

  form();
  showMoreStyles(".button-styles", ".styles-2");
  mask('[name="phone"]');
  calc({
    sizes: "#size",
    materials: "#material",
    options: "#options",
    promocode: ".promocode",
    result: ".calc-price",
  });
  filter();
  pictureSize(".sizes-block");

  burger(".burger-menu", ".burger");

  accordion(".accordion-heading");
  drop();
});
