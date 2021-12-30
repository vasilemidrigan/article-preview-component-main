"use strict";
// Variables
const shareButton = document.querySelector(".right");
const left = document.querySelector(".left");
const center = document.querySelector(".center");
const shareBlock = document.querySelector(".share");
const michelle = document.querySelector(".michelle");
const info = document.querySelector(".info");
const textShare = document.querySelector(".text-share");
const facebookLogo = document.querySelector(".facebook-logo");
const twitterLogo = document.querySelector(".twitter-logo");
const pinterestLogo = document.querySelector(".pinterest-logo");
const wrapper = document.querySelector(".wrapper");
const parentElement = wrapper.parentNode;
const wrapperOverflow = document.createElement("div");
const floatShare = document.createElement("div");
const triangle = document.createElement("div");

// ========================================================================
// Share function for mob version
// ========================================================================
function shareMob() {
  shareBlock.classList.toggle("active");
  shareButton.classList.toggle("right--active");
  michelle.classList.toggle("hidden");
  info.classList.toggle("hidden");
  textShare.classList.toggle("hidden");
  facebookLogo.classList.toggle("hidden");
  twitterLogo.classList.toggle("hidden");
  pinterestLogo.classList.toggle("hidden");
}
// ========================================================================
// Share function for desk version
// ========================================================================
function shareDesk() {
  // if the share button wasn't pressed, then:
  if (!floatShare.classList.contains("float-share-block")) {
    //  Creating the .share element for minimum 800px screens wide
    floatShare.classList.add("float-share-block");
    floatShare.style.display = "flex";
    shareBlock.append(floatShare);
    //  Creating the triangle for .share element
    triangle.className = "triangle hidden";
    triangle.classList.toggle("hidden");
    floatShare.append(triangle);
    // Appending the textShare to floatShare
    floatShare.append(textShare);
    textShare.classList.add("text-share-desk__active");
    textShare.classList.remove("hidden");
    // Appending logos and show them
    floatShare.append(facebookLogo);
    floatShare.append(twitterLogo);
    floatShare.append(pinterestLogo);
    facebookLogo.classList.remove("hidden");
    twitterLogo.classList.remove("hidden");
    pinterestLogo.classList.remove("hidden");
  } else {
    floatShare.style.display = "none";
    floatShare.classList.remove("float-share-block");
  }
}
// =========================================================================
// Share button event
// =========================================================================
shareButton.addEventListener("click", function () {
  // Mobile version share event
  if (document.body.clientWidth <= 799) {
    shareMob();
  } else {
    // Desk version share event
    if (wrapperOverflow.className === "wrapper-overflow") {
      shareDesk();
    } else {
      wrapperOverflow.className = "wrapper-overflow";
      parentElement.replaceChild(wrapperOverflow, wrapper);
      wrapperOverflow.appendChild(wrapper);
      shareDesk();
    }
  }
});
// =========================================================================
// Reseting the share element in case if the window size is changed from
//   mob version to desk and vice versa
// =========================================================================
window.addEventListener("resize", function () {
  if (
    shareBlock.classList.contains("active") &&
    document.body.clientWidth > 799
  ) {
    shareMob();
  } else if (
    floatShare.classList.contains("float-share-block") &&
    document.body.clientWidth < 800
  ) {
    floatShare.remove();
    if (document.body.firstElementChild === wrapperOverflow) {
      document.body.replaceChild(wrapper, wrapperOverflow);
      facebookLogo.classList.add("hidden");
      twitterLogo.classList.add("hidden");
      pinterestLogo.classList.add("hidden");
      textShare.classList.add("hidden");
      left.appendChild(textShare);
      center.appendChild(facebookLogo);
      center.appendChild(twitterLogo);
      center.appendChild(pinterestLogo);
      wrapperOverflow.classList.remove("wrapper-overflow");
      floatShare.classList.remove("float-share-block");
    } else {
      return;
    }
  }
});
