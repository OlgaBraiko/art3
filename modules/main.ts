import modals from "./modal";

import slides from "./sliders";

import form from "./forms";

import showMoreStyles from "./showMoreStyles";

import calc from "./calculator";

window.addEventListener("DOMContentLoaded", () => {
  modals();

  modals();

  slides(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );

  form();
  showMoreStyles(".button-styles", ".styles-2");
  calc({
    sizes: "#size",
    materials: "#material",
    options: "#options",
    promocode: ".promocode",
    result: ".calc-price",
  });
});
