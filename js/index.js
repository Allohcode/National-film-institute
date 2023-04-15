"use strict";

const menubar = document.querySelector("#menu");
const showBar = document.querySelector("nav  ul");
const navLink = document.querySelector(".nav-links");
const menuCancle = document.querySelector("#menu-cancle");
let date = document.querySelectorAll("#date");
const fullYear = new Date().getFullYear();
date.forEach((date) => (date.textContent = fullYear));
let menuOpen = false;
let time = 4000;
let i = 0;
let img = document.querySelector(".img");

const images = [
  "./images/img1.JPG",
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
];

/*
navgation bar 
*/

menubar.addEventListener("click", () => {
  showBar.classList.add("nav-slide");
  menuCancle.style.display = "block";
  showBar.style.transition = "all ease 0.5s";
  menubar.style.display = "none";
});

// close navigtion
menuCancle.addEventListener("click", () => {
  showBar.classList.remove("nav-slide");
  menuCancle.style.display = "none";
  menubar.style.display = "block";
});

/*
Image slider 
*/

const imgSlider = () => {
  // change images after 4s
  img.src = images[i];

  if (i < images.length - 1) {
    i++;
    images[i];
    // console.log(images[i], i);
  } else {
    i = 0;
  }

  setTimeout(imgSlider, time);
};

//  call function once page is load;
window.onload = imgSlider();

// Reveal sections on croll.
/////////////////////////////////

// const allSection = document.querySelectorAll(".section");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove("section-hidden");
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSection.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section-hidden");
// });

const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observe) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observe.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
