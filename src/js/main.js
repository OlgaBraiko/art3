import slides from "../../ts/sliders";
import form from "../../ts/forms";

import modals from "../../ts/modal";

window.addEventListener("DOMContentLoaded", () => {
  modals();
  slides(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  slides(".main-slider-item", "vertical");
  form();
});
