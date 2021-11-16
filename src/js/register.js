import * as common from "./common";

window.addEventListener("DOMContentLoaded", () => {
  const submitBtnEl = document.getElementById("loginMainBtn");
  const formEl = document.getElementById("registerForm");
  const passwordBtnEl = document.getElementById("passwordBtn");
  const validateEl = document.querySelectorAll(".validate_box");

  const submitBtnClickHandler = (e) => {
    validateElement();
    // if (validateElement()) {
    //   console.log("success")
    // }else {
    //   console.log("failed")
    //   return;
    //   // warring message
    // }

    // form submit!
  };

  const hasValidateIsTrue = (el, arr) => {
    if (el.hasAttribute("data-validate") && el.dataset.validate === "true") {
      arr.push(el);
    }
  };

  const hasInputEl = (el) => {
    return el.querySelector("input") != null;
  };

  const checkValidateForEl = () => {
    const result = [];

    validateEl.forEach((el) => {
      hasValidateIsTrue(el, result);

      if (hasInputEl(el)) {
        hasValidateIsTrue(el.querySelector("input"), result);
      }
    });

    return result;
  };

  const validateElement = () => {
    // dataset -> validate = true checked
    const nodeEls = checkValidateForEl();
    nodeEls
      .filter((el) => el.dataset.validate === "true")
      .filter((el) => common.isEmpty(el.value))
      .map((el) => {
        let validateEl = checkValidateBox(el);
        if (validateEl == undefined) {
          return;
        }

        validateEl.classList.add("validate");
      });
  };

  const removeValidate = (el) => {
    el.classList.remove("validate");
  };

  const checkValidateBox = (el) => {
    if (el.classList.contains("validate_box")) {
      removeValidate(el);
      return el;
    }

    return checkParentClassList(el);
  };

  const checkParentClassList = (el) => {
    let parent = el.parentElement;
    let result = checkValidateBox(parent);

    while (!result) {
      if (parent.classList.contains("register_box")) {
        parent = undefined;
        break;
      }

      parent = parent.parentElement;
      result = checkValidateBox(parent);
    }

    removeValidate(el);
    return parent;
  };

  const passwordBtnClickHandler = (e) => {
    let el = e.target;
    if (el.classList.contains("fa-eye")) {
      el.classList.remove("fa-eye");
      el.classList.add("fa-eye-slash");
    } else {
      el.classList.remove("fa-eye-slash");
      el.classList.add("fa-eye");
    }
  };

  submitBtnEl.addEventListener("click", submitBtnClickHandler);
  passwordBtnEl.addEventListener("click", passwordBtnClickHandler);
});
