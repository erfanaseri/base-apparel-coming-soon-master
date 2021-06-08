import { func } from "assert-plus";
import "core-js/stable";
import "regenerator-runtime/runtime";

const mailformat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const email = document.querySelector("#form");
const emailInput = document.querySelector("#emails");
const btn = document.querySelector("button");
const errorMessage = document.querySelector(".error-message");
const iconError = document.querySelector(".error-icon");
const activeSubmit = document.querySelector(".submit-active");
const submit = document.querySelector(".submit");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let elementValue = emailInput.value;
  console.log(elementValue);
  if (!emailInput.validity.valid) {
    console.log("Please provide a valid email");
    emailInput.value = "";
    errorMessage.style.opacity = 1;
    iconError.style.opacity = 1;
    submit.classList.add("submit-active");
  } else {
    emailInput.value = "";
    errorMessage.style.opacity = 0;
    iconError.style.opacity = 0;
    submit.classList.remove("submit-active");
  }
  //   console.log(!emailInput.validity.valid);
  //   console.log(emailInput.checkValidity());
});

// input.addEventListener("invalid", function (e) {
//   e.preventDefault();
//   //   console.log(this.validity);
//   input.setCustomValidity("My custom message");
// });
