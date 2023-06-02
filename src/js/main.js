import modals from "../../ts/modal";

import slides from "../../ts/sliders";

import modals from "../../ts/modal";

import mask from "../../ts/mask";

import form from "../../ts/forms";

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
  mask('[name="phone"]');
});
