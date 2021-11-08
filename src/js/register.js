window.addEventListener("DOMContentLoaded", () => {
  const submitBtnEl = document.getElementById("loginMainBtn");
  const registerFormEl = document.getElementById("registerForm");
  const passwordBtnEl = document.getElementById("passwordBtn");

  const submitBtnClickHandler = () => {
    console.log(registerFormEl);
    // registerFormEl.submit();
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
