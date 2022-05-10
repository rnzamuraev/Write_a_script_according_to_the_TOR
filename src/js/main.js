import "./slider.js";
import modals from "./modules/modals.js";
import tabs from "./modules/tabs.js";
import forms from "./modules/forms.js";
import changeModalState from "./modules/changeModalState.js";
import timer from "./modules/timer.js";

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let modalState = {};
  const deadline = "2022-05-15";

  timer("#timer", deadline);
  changeModalState(modalState);
  modals();
  tabs(
    ".glazing_slider",
    ".glazing_block",
    ".glazing_content",
    "active"
  );
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",
    "inline-block"
  );
  forms(modalState);
});
