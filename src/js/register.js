window.addEventListener("DOMContentLoaded", () => {
  const submitBtnEl = document.getElementById("loginMainBtn");
  const formEl = document.getElementById("registerForm");
  const passwordBtnEl = document.getElementById("passwordBtn");
  const validateEl = document.querySelectorAll(".validate_box");
  const warningIconEls = document.querySelectorAll(".warning_icon");
  const regex = /^[a-zA-Z0-9]{6,30}$/gi;

  const submitBtnClickHandler = (e) => {
    inactiveWarningIcon();
    inactiveWarningBox();
    validateElement();
  };

  const hasValidateIsTrue = (el, arr) => {
    if (el.hasAttribute("data-validate") && el.dataset.validate === "true") {
      arr.push(el);
    }
  };

  const hasInputEl = (el) => {
    return el.querySelector("input") != null;
  };

  const validateElement = () => {
    const nodeEls = checkValidateForEl();
    nodeEls
      .filter((el) => el.dataset.validate === "true")
      .filter((el) => isEmpty(el.value))
      .filter((el) => {
        if (el.getAttribute("id") === "password") return true;
        // TODO : regex 검증해야함...
        checkSpecialCharacters(el.value);
      })
      .map((el) => {
        let validateEl = checkValidateBox(el);
        if (validateEl == undefined) {
          return;
        }

        activeWaringBox(validateEl);
        activeWarning(validateEl);
      });
  };

  const checkSpecialCharacters = (str) => {
    const result = str.match(regex);
    return isEmpty(result) ? true : false;
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

  const inactiveWarningBox = () => {
    validateEl.forEach((el) => {
      if (!el.classList.contains("validate")) return;

      el.classList.remove("validate");
    });
  };

  const activeWaringBox = (el) => {
    el.classList.add("validate");
  };

  const activeWarning = (el) => {
    if (!el.hasAttribute("data-index")) return;

    warningIconEls[el.dataset.index].classList.remove("dispnone");
  };

  const inactiveWarningIcon = () => {
    warningIconEls.forEach((el) => {
      if (!el.classList.contains("dispnone")) {
        el.classList.add("dispnone");
      }
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

const isEmpty = (v) => {
  return v == undefined || v == null || v == "";
};
