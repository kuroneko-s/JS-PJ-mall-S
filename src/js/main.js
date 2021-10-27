// image window resizeing에 따라서 크기 조절

// accordion img max width 바꿔주는 코드를 JS에 밀어넣어야함
/*
.item img {
  max-width: 57vw;
}

.item img:hover {
  max-width: 57vw;
}

.item:not(:first-child) img {
  width: 11vw;
  height: 100%;
  object-fit: cover;
}

선택된 값은 57vw,
비선택값은 11vw, cover

*/
const accordionEl = document.getElementById("accordion");
const imgEls = accordionEl.querySelectorAll("img");

window.addEventListener("DOMContentLoaded", () => {
  accordionEl.addEventListener("mouseover", mouseOverHandler);
  accordionEl.addEventListener("mouseout", mouseOutHandler);
});

const mouseOutHandler = (e) => {
  // 마우스 나갈때 확대시켜놓는 값이 없으면 지우지 말것
  var result = [];

  imgEls.forEach((imgEl) => {
    if (imgEl.classList.contains("scale_img")) {
      result.push(imgEl);
    }
  });

  e.target.classList.remove("unscale_img");
  e.target.classList.add("unscale_img");
};

const mouseOverHandler = (e) => {
  e.target.classList.remove("unscale_img");
  e.target.classList.add("scale_img");
};
