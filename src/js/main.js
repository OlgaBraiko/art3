import modals from "../../ts/modal";

import slides from "../../ts/sliders";

import mask from "../../ts/mask";

import form from "../../ts/forms";

import checkTextInputs from "../../ts/textInputs";

window.addEventListener("DOMContentLoaded", () => {
  modals();

  slides(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );

  form();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
});
