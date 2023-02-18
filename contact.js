const loginTag = document.getElementById("login");
const formpage = document.getElementsByClassName("form-page")[0];
const formDelete = document.getElementsByClassName("form-delete");
let getfromlocalBadge = JSON.parse(localStorage.getItem("cartItem")) || [];
const navBadge = document.getElementsByClassName("nav-cart-badge")[0];
navBadge.innerText = getfromlocalBadge.length ? getfromlocalBadge.length : "0";
let formdeletecopy = [...formDelete];

loginTag.addEventListener("click", () => {
  console.log("hello");
  formpage.classList.add("form-show");
  formdeletecopy.forEach((item) => {
    item.addEventListener("click", () => {
      formpage.classList.remove("form-show");
    });
  });
});
