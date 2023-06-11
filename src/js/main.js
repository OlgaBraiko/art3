import modals from "../../ts/modal";

import slides from "../../ts/sliders";
 

import form from "../../ts/forms";

import showMoreStyles from "../../ts/showMoreStyles";
 

import mask from "../../ts/mask";

import form from "../../ts/forms";

import checkTextInputs from "../../ts/textInputs";
 

import filter from "../../ts/filter";

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
 
  filter();
 
 
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
 
});
