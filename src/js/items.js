const selectTitle = {
  1: "Recommended",
  2: "New In",
  3: "Price Hight to Low",
  4: "Price Low to Hight",
};
let selectClicked = false;
// let menuClicked = false;
let dataVal = 1; // default first li vlaue

window.addEventListener("DOMContentLoaded", () => {
  const selectEl = document.getElementById("select");
  const selectBoxEl = document.querySelector(".select_box");
  const selectTitleEl = selectEl.querySelector(".select_title");
  const selectBoxliEl = selectBoxEl.querySelectorAll("li");
  const selectArrowEl = selectEl.querySelector(".select_arrow i");
  const menuBoxEl = document.getElementById("menuBox");
  const menuInnerBoxsEl = menuBoxEl.querySelectorAll(".menus_innerbox");
  // const menuRadioEl = document.getElementById("menuRadio");
  const checkBoxEl = document.getElementById("checkBox");
  const checkBoxEls = document.querySelectorAll(".check_box");
  const scrollBtnEl = document.getElementById("scrollbtn");

  const scrollBtnClickHandler = (e) => {
    window.scrollTo(0, 0);
  };

  const checkBoxClickHandler = (e) => {
    const index = e.target.getAttribute("data-check-index");
    const exist = e.target.classList.contains("fas");

    if (index != undefined) {
      // 클릭한 값을 기반으로 재검색

      console.log(checkBoxEls[index]);
    } else if (exist) {
      const index = e.target.getAttribute("data-check-close");
      checkBoxEls[index].remove();
    } else {
      return;
    }
  };

  const menuItemClickHandler = (e) => {
    const index = e.target.getAttribute("data-index");
    const radioIndex = e.target.getAttribute("data-radio-index");

    if (index != undefined) {
      const index = e.target.getAttribute("data-index");
      const selectedEl = menuInnerBoxsEl[index];
      const menuRadioEl = selectedEl.childNodes[1];

      if (!menuRadioEl.classList.contains("dispnone")) {
        menuRadioEl.classList.add("dispnone");
        menuClicked = false;
      } else {
        menuRadioEl.classList.remove("dispnone");
        menuClicked = true;
      }
    } else if (radioIndex != undefined) {
      const childNode = e.target.childNodes[0];
      if (!childNode.classList.contains("mr10")) return;

      // TODO: 값이 check되면 값을 요청해야함

      if (childNode.classList.contains("radio_check")) {
        childNode.classList.add("radio_checked");
        childNode.classList.remove("radio_check");
      } else if (childNode.classList.contains("radio_checked")) {
        childNode.classList.add("radio_check");
        childNode.classList.remove("radio_checked");
      } else {
        return;
      }
    } else {
      return;
    }
  };

  const selectClickHandler = (e) => {
    if (selectClicked) {
      // hide
      selectArrowEl.classList.add("fa-arrow-down");
      selectArrowEl.classList.remove("fa-arrow-up");
      selectBoxEl.classList.add("dispnone");
      selectTitleEl.innerText = selectTitle[dataVal];
      selectClicked = false;
    } else {
      // show
      selectArrowEl.classList.remove("fa-arrow-down");
      selectArrowEl.classList.add("fa-arrow-up");
      selectBoxEl.classList.remove("dispnone");
      selectTitleEl.innerText = "Sort By";
      selectBoxliEl[dataVal - 1].classList.add("checked");
      selectClicked = true;
    }
  };

  const selectBoxClickHandler = (e) => {
    // TODO: 나중에 이 값을 바꾸면 sort 되게 수정해야함
    if (e.target.getAttribute("data-value") == null) {
      return;
    }
    selectArrowEl.classList.add("fa-arrow-down");
    selectArrowEl.classList.remove("fa-arrow-up");

    selectBoxliEl[dataVal - 1].classList.remove("checked");

    dataVal = e.target.getAttribute("data-value");
    selectTitleEl.innerText = selectTitle[dataVal];
    selectBoxEl.classList.add("dispnone");
    selectClicked = false;
  };

  selectEl.addEventListener("click", selectClickHandler);
  selectBoxEl.addEventListener("click", selectBoxClickHandler);
  menuBoxEl.addEventListener("click", menuItemClickHandler);
  checkBoxEl.addEventListener("click", checkBoxClickHandler);
  scrollBtnEl.addEventListener("click", scrollBtnClickHandler);
});
