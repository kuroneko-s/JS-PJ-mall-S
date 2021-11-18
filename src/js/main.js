const accordionEl = document.getElementById("accordion");
const imgEls = accordionEl.querySelectorAll("img");

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
  // TODO: result create Popup
  if (result) {
    alert("Account Create!!!");
  }
};
