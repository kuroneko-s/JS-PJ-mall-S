const submitBtnEl = document.getElementById("createAccountBtn");
const formEl = document.getElementById("registerForm");
const passwordBtnEl = document.getElementById("passwordBtn");
const validateEl = document.querySelectorAll(".validate_box");
const warningIconEls = document.querySelectorAll(".warning_icon");
const warningTextEls = document.querySelectorAll("small");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const loginHandlerEl = document.getElementById("loginHandlerBtn");

const DISPLAY_NONE = "dispnone";

// const alphabetAndNumber = /^[a-zA-Z0-9\s]{30}$/;
const onlyNumber = /^[0-9]{0,4}$/;
const passwordRegexp =
  /^.*(?=.{8,50})(?=.*[0-9])(?=.*[!,@,#,$,%,^,&,*])(?=.*[a-zA-Z]).*$/;
let today = new Date();

/* Element and Handler Function */
window.addEventListener("DOMContentLoaded", () => {
  (() => {
    yearEl.placeholder = today.getFullYear();
    monthEl.placeholder = today.getMonth() + 1;
    dayEl.placeholder = today.getDate();
  })();

  // front에서 한번 검증하고 back단에서 한번더 검증
  const submitBtnClickHandler = (e) => {
    inactiveWarningIcon();
    inactiveWarningBox();
    inactiveWarningText();

    const result = validateElement();
    if (result) {
      // form submit
      formEl.submit();
    }
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
  loginHandlerEl.addEventListener(
    "click",
    () => (window.location.href = "/login")
  );
});

/* Private Function */
const isEmpty = (v) => {
  return v == undefined || v == null || v == "";
};

const removeValidate = (el) => {
  el.classList.remove("validate");
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

const checkValidateBox = (el) => {
  if (el.classList.contains("validate_box")) {
    removeValidate(el);
    return el;
  }

  return checkParentClassList(el);
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
  let result = true;
  const nodeEls = checkValidateForEl();
  nodeEls
    .filter((el) => el.dataset.validate === "true")
    .filter((el) => {
      const attr = el.getAttribute("id");

      if (el.getAttribute("id") === "password") {
        return checkPassword(el.value);
      } else if (attr === "account" || attr === "name") {
        return checkAccountAndName(el.value);
      } else {
        return checkNumber(el);
      }
    })
    .map((el) => {
      let validateEl = checkValidateBox(el);
      if (validateEl == undefined) {
        return;
      }

      activeWaringBox(validateEl);
      activeWarning(validateEl);
      activeWarningText(validateEl);

      result = false;
    });

  return result;
};

const checkNumber = (el) => {
  const value = el.value;
  if (isEmpty(value)) return true;

  const type = el.getAttribute("name");
  switch (type) {
    case "year":
      if (value.length != 4) return true;
      return value > today.getFullYear();
    case "month":
      return value >= 13;
    case "day":
      return value >= 32;
    default:
      return true;
  }
};

const checkAccountAndName = (value) => {
  // MEMO: Account는 자유의 영역, 사용자에게 자유도를 높이는게 좋다고 판단.
  return value.length == 0;
};

const checkPassword = (value) => {
  return !passwordRegexp.test(value);
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

/** active and inactive */
const activeWaringBox = (el) => {
  el.classList.add("validate");
};

const inactiveWarningBox = () => {
  validateEl.forEach((el) => {
    if (!el.classList.contains("validate")) return;

    el.classList.remove("validate");
  });
};

const activeWarning = (el) => {
  if (!el.hasAttribute("data-index")) return;
  warningIconEls[el.dataset.index].classList.remove(DISPLAY_NONE);
};

const inactiveWarningIcon = () => {
  warningIconEls.forEach((el) => {
    if (!el.classList.contains(DISPLAY_NONE)) {
      el.classList.add(DISPLAY_NONE);
    }
  });
};

const activeWarningText = (el) => {
  let index;
  if (el.hasAttribute("data-date")) {
    index = el.dataset.date;
  } else if (el.hasAttribute("data-index")) {
    index = el.dataset.index;
  } else {
    return true;
  }

  warningTextEls[index].classList.remove(DISPLAY_NONE);

  if (index == 1) {
    warningTextEls[1].classList.add("warning_text");
    warningTextEls[1].classList.remove("small_text");
  }
};

const inactiveWarningText = () => {
  warningTextEls.forEach((el) =>
    !el.classList.contains(DISPLAY_NONE) ? el.classList.add(DISPLAY_NONE) : true
  );
  // TODO 이부분 로직 수정

  const passwordEl = warningTextEls[1];

  passwordEl.classList.remove(DISPLAY_NONE);
  passwordEl.classList.remove("warning_text");
  passwordEl.classList.add("small_text");
};
