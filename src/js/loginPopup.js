window.addEventListener("DOMContentLoaded", () => {
  const popupEl = document.getElementById("popup");
  const formEl = popupEl.querySelector("form");
  const btnEl = formEl.querySelector("input[type=button]");
  const accountFindEl = document.getElementById('accountFind');
  const accountRegisterEl = document.getElementById('accountRegister')

  btnEl.addEventListener("click", (e) => {
    // loign form
    console.log(e);
  });

  accountFindEl.addEventListener("click", () => {
    window.location.href = "/account/find"
  })

  accountRegisterEl.addEventListener("click", () => {
    window.location.href = "/account/register"
  })

});
