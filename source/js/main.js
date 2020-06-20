'use strict';

(function () {
  var accordion = document.getElementsByClassName("accordion__btn");
  var panel = document.getElementsByClassName("accordion__panel");

  for (var item of panel) {
    item.classList.toggle("hide");
  };

  for (var item of accordion) {
    item.addEventListener("click", function () {
      this.classList.toggle("active");

      this.nextElementSibling.classList.toggle("hide");
    });
  };

  function initAccordion(x) {
    if (!x.matches) {
      panel = document.getElementsByClassName("accordion__panel");

      for (var item of panel) {
        if (item.classList.contains("hide")) {
          item.classList.remove("hide");
        }
      };
    } else {
      for (var item of panel) {
        item.classList.toggle("hide");
      };
    };
  };

  var x = window.matchMedia("(max-width: 767px)");
  initAccordion(x);
  x.addListener(initAccordion);
})();
