window.addEventListener("DOMContentLoaded", () => {
  const loginEl = document.getElementById("login");
  const popupEl = document.getElementById("popup");
  let leave = false;
  let curTime;
  let intervalId;

  const mouseoverHandler = (e) => {
    const exist = popupEl.classList.contains("dispnone");
    if (!!intervalId) {
      clearInterval(intervalId);
    }

    if (e.target.classList.contains('fas')){
      popupEl.style.left = e.target.getBoundingClientRect().left - 175 + "px";
    }

    if (exist) {
      popupEl.classList.remove("dispnone");
      leave = true;
    } else {
      return;
    }
  };

  const mouseoutHandler = (e) => {
    curTime = new Date().getTime();

    intervalId = setInterval(() => {
      if (new Date().getTime() - curTime >= 1000) {
        popupEl.classList.add("dispnone");
        clearInterval(intervalId);
      }
    }, 100);
  };

  loginEl.addEventListener("mouseover", mouseoverHandler);
  loginEl.addEventListener("mouseout", mouseoutHandler);
  popupEl.addEventListener("mouseover", mouseoverHandler);
  popupEl.addEventListener("mouseout", mouseoutHandler);
});
