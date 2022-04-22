'use strict'

const toggleBtn = document.querySelector(".toggle_btn");
const navi = document.getElementById("navi");
const mask = document.querySelector(".mask");
const naviItem = document.querySelectorAll(".navi_item");

toggleBtn.addEventListener("click", function(){
  toggleBtn.classList.toggle("open");
  navi.classList.toggle("open");
  mask.classList.toggle("open");
});