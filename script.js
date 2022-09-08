'use strict';

const contactBtn = document.querySelector(".contact-btn");
const detailsBtn = Array.from(document.querySelectorAll(".Btns"));

const reviewContainer = Array.from(document.querySelectorAll(".review"));
const nxtBtn = document.querySelector(".nxtBtn");
const preBtn = document.querySelector(".preBtn");

const continueBtn = document.querySelector(".continue");
const email = document.getElementById("enterEmail");

contactBtn.addEventListener("click", () => {
  console.log("CONTACT US");
});

detailsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("CLICKED");
  });
});

// Swipe

reviewContainer.forEach((item) => {
  let contaninerDimensions = item.getBoundingClientRect();
  let containerWidth = contaninerDimensions.width;

  nxtBtn.addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn.addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// Subscribe Email

continueBtn.addEventListener("click", () => {
  if (email.value.includes("@")) {
    console.log(email.value);
    email.value = "";
    email.style.outline ="none";
  } else {
    console.log("please right correct email!");
    email.style.outline ="2px solid red";
  }
});

