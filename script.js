"use strict";

const claimBtn = document.querySelector(".claim-btn");
const tryBtn = document.querySelector(".trial-btn");

const validName = function (name) {
  const nameInput = document.querySelector(`#${name}`).value;

  if (!nameInput) {
    return false;
  }
  return true;
};

const validEmail = function () {
  const emailInput = document.querySelector("#email").value;
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailInput) {
    return false;
  }

  if (!regex.test(emailInput)) {
    return false;
  }

  return true;
};

const validPassword = function () {
  const passwordInput = document.querySelector("#password").value;

  if (!passwordInput) {
    return false;
  }
  return true;
};

const emailError = function () {
  const emailInput = document.querySelector("#email");
  emailInput.value = "";
  emailInput.placeholder = "email@example/com";
};

const activeError = function (id) {
  const inputElement = document.querySelector(`#${id}`);
  const labelElement = document.querySelector(`label[for='${id}']`);
  const imgElement = document.querySelector(`img[alt='${id}']`);

  if (id === "email") {
    emailError();
  }

  inputElement.classList.add("error");
  labelElement.classList.remove("hidden");
  imgElement.classList.remove("hidden");
};

const clearError = function (id) {
  const inputElement = document.querySelector(`#${id}`);
  const labelElement = document.querySelector(`label[for='${id}']`);
  const imgElement = document.querySelector(`img[alt='${id}']`);

  inputElement.classList.remove("error");
  labelElement.classList.add("hidden");
  imgElement.classList.add("hidden");
};

const handleClaimBtnCLick = () => {
  if (!validName("firstName")) {
    activeError("firstName");
  } else clearError("firstName");

  if (!validName("lastName")) {
    activeError("lastName");
  } else clearError("lastName");

  if (!validEmail()) {
    activeError("email");
  } else clearError("email");

  if (!validPassword()) {
    activeError("password");
  } else clearError("password");
};

claimBtn.addEventListener("click", handleClaimBtnCLick);
tryBtn.addEventListener("click", handleClaimBtnCLick);
