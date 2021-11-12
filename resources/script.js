"use strict";
const shareButton = document.querySelector(".right");
const shareBlock = document.querySelector(".share");
const michelle = document.querySelector(".michelle");
const info = document.querySelector(".info");
const textShare = document.querySelector(".text-share");
const facebookLogo = document.querySelector(".facebook-logo");
const twitterLogo = document.querySelector(".twitter-logo");
const pinterestLogo = document.querySelector(".pinterest-logo");

console.log("shareButton:", shareButton);

shareButton.addEventListener("click", function () {
  shareBlock.classList.toggle("active");
  shareButton.classList.toggle("right--active");
  michelle.classList.toggle("hidden");
  info.classList.toggle("hidden");
  textShare.classList.toggle("hidden");
  facebookLogo.classList.toggle("hidden");
  twitterLogo.classList.toggle("hidden");
  pinterestLogo.classList.toggle("hidden");
});
