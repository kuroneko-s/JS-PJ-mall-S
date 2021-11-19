const accordionEl = document.getElementById("accordion");
const imgEls = accordionEl.querySelectorAll("img");
const alertEl = document.getElementById("createAccount");
const alertBtnEl = alertEl.querySelector("input");

window.addEventListener("DOMContentLoaded", () => {
  accordionEl.addEventListener("mouseover", mouseOverHandler);
});

const mouseOverHandler = (e) => {
  imgEls.forEach((imgEl) => {
    if (imgEl.classList.contains("scale_img")) {
      imgEl.classList.remove("scale_img");
      imgEl.classList.add("unscale_img");
    }
  });

  e.target.classList.remove("unscale_img");
  e.target.classList.add("scale_img");
};

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const result = urlParams.get("success");

  const alertBtnClickHandler = (e) => {
    console.log(e.target.parentNode);
    e.target.parentNode.classList.remove("active");
  };

  if (result) {
    alertEl.classList.add("active");
    alertBtnEl.addEventListener("click", alertBtnClickHandler);
  }
};
