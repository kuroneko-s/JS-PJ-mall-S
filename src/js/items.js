const selectTitle = {
  1: "Recommended",
  2: "New In",
  3: "Price Hight to Low",
  4: "Price Low to Hight",
};
let clicked = false;
let dataVal = 1; // default first li vlaue

window.addEventListener("DOMContentLoaded", () => {
  const selectEl = document.getElementById("select");
  const selectBoxEl = document.querySelector(".select_box");
  const selectTitleEl = selectEl.querySelector(".select_title");
  const selectBoxliEl = selectBoxEl.querySelectorAll("li");
  const selectArrowEl = selectEl.querySelector(".select_arrow i");

  const selectClickHandler = (e) => {
    if (clicked) {
      // hide
      selectArrowEl.classList.add("fa-arrow-down");
      selectArrowEl.classList.remove("fa-arrow-up");
      selectBoxEl.classList.add("dispnone");
      selectTitleEl.innerText = selectTitle[dataVal];
      clicked = false;
    } else {
      // show
      selectArrowEl.classList.remove("fa-arrow-down");
      selectArrowEl.classList.add("fa-arrow-up");
      selectBoxEl.classList.remove("dispnone");
      selectTitleEl.innerText = "Sort By";
      selectBoxliEl[dataVal - 1].classList.add("checked");
      clicked = true;
    }
  };

  const selectBoxClickHandler = (e) => {
    // 나중에 이 값을 바꾸면 sort 되게 수정해야함
    if (e.target.getAttribute("data-value") == null) {
      return;
    }
    selectArrowEl.classList.add("fa-arrow-down");
    selectArrowEl.classList.remove("fa-arrow-up");

    selectBoxliEl[dataVal - 1].classList.remove("checked");

    dataVal = e.target.getAttribute("data-value");
    selectTitleEl.innerText = selectTitle[dataVal];
    selectBoxEl.classList.add("dispnone");
    clicked = false;
  };

  selectEl.addEventListener("click", selectClickHandler);
  selectBoxEl.addEventListener("click", selectBoxClickHandler);
});
