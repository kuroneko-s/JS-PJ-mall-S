window.addEventListener("DOMContentLoaded", () => {
  const popupEl = document.getElementById("popup");
  const formEl = popupEl.querySelector("form");
  const btnEl = formEl.querySelector("input[type=button]");

  btnEl.addEventListener("click", (e) => {
    console.log(e);
  });
});
