<<<<<<< HEAD
window.addEventListener("DOMContentLoaded", () => {
  const loginBtnEl = document.getElementById('loginMainBtn')
  const accountFindEl = document.getElementById('mainAccountFind')
  const accountRegisterEl = document.getElementById('mainAccountRegister')

  const loginBtnClickHandler = (e) => {
    // login 검증
     console.log(e.target)
  }

  const accountFindClickHandler = (e) => {
    window.location.href = "/account/find"
  }

  const accountRegisterClickHandler = (e) => {
    window.location.href = "/account/register"
 }


  loginBtnEl.addEventListener("click", loginBtnClickHandler)
  accountFindEl.addEventListener('click', accountFindClickHandler)
  accountRegisterEl.addEventListener('click', accountRegisterClickHandler)
});
=======
window.addEventListener("DOMContentLoaded", () => {
  const loginBtnEl = document.getElementById('loginMainBtn')
  const accountFindEl = document.getElementById('mainAccountFind')
  const accountRegisterEl = document.getElementById('mainAccountRegister')

  const loginBtnClickHandler = (e) => {
    // login 검증
     console.log(e.target)
  }

  const accountFindClickHandler = (e) => {
    window.location.href = "/account/find"
  }

  const accountRegisterClickHandler = (e) => {
    window.location.href = "/account/register"
 }


  loginBtnEl.addEventListener("click", loginBtnClickHandler)
  accountFindEl.addEventListener('click', accountFindClickHandler)
  accountRegisterEl.addEventListener('click', accountRegisterClickHandler)
});
>>>>>>> 155242d9770d2fdbe12fb78188112dd009364c47
