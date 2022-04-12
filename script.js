"use strict";

//links
//https://www.computerhope.com/jargon/r/regex.htm
//https://www.w3resource.com/javascript/form/email-validation.php

const inputEmail = document.getElementById("input-email");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputEmail.value.match(regEx)) {
    console.log("valid");
    form.classList.remove("error");
  } else {
    console.log("error");
    form.classList.add("error");
  }
});
