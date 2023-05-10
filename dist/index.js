const tabs = document.querySelectorAll(".tab");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    const tabContents = document.querySelectorAll(".tab-content");

    tabContents.forEach(function (tab) {
      tab.classList.remove("active-tab");
    });

    tabs.forEach(function (tab) {
      tab.classList.remove("chosen-tab");
    });

    const clickedTab = document.querySelector("." + tab.id);
    clickedTab.classList.add("active-tab");
    tab.classList.add("chosen-tab");
  });
});

const content = document.querySelector(".hamburger-content");

const hamIcon = document.querySelector(".hamburger-icon");
hamIcon.addEventListener("click", function () {
  content.classList.toggle("hidden");
});

const hamClose = document.querySelector(".hamburger-close");
hamClose.addEventListener("click", function () {
  content.classList.toggle("hidden");
});
