window.addEventListener("DOMContentLoaded", () => {
  const loginEl = document.getElementById("login");
  const popupEl = document.getElementById("popup");
  let leave = false;

  const checkLeave = () => {
    return leave;
  };
  const setLeave = (v) => {
    leave = v;
  };

  const mouseoverHandler = (e) => {
    const exist = popupEl.classList.contains("dispnone");

    if (exist || leave) {
      popupEl.classList.remove("dispnone");
      leave = true;
    } else {
      return;
    }

    console.log(leave);
  };

  loginEl.addEventListener("mouseover", mouseoverHandler);

  loginEl.addEventListener("mouseout", (e) => {
    setTimeout(() => {
      if (checkLeave) {
        popupEl.classList.add("dispnone");
        setLeave(false);
      } else {
        return;
      }
    }, 1000);

    console.log(leave);
  });

  popupEl.addEventListener("mouseover", mouseoverHandler);
});
