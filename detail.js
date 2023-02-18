const detailIndex = parseInt(localStorage.getItem("imageIdForDetailPage"));
const products = [
  { id: 1, title: "black back-pack", url: "./os photo/bag1.jpg", price: 23000 },
  { id: 2, title: "Man pant", url: "./os photo/pant1.jpg", price: 28000 },
  { id: 3, title: "black watch", url: "./os photo/watch1.jpg", price: 40000 },
  { id: 4, title: "black sneaker", url: "./os photo/shoe2.jpg", price: 23000 },
  { id: 5, title: "Argentina hat", url: "./os photo/hat1.jpg", price: 13000 },
  {
    id: 6,
    title: "short pant",
    url: "./os photo/short-pant1.jpg",
    price: 18000,
  },
  { id: 7, title: "sun-glass", url: "./os photo/sun-glass1.jpg", price: 25000 },
  {
    id: 8,
    title: "back-pack",
    url: "./os photo/bag2.jpg",
    price: 20000,
  },
  { id: 9, title: "class watch", url: "./os photo/watch3.jpg", price: 48000 },
  { id: 10, title: "whole pink hat", url: "./os photo/hat3.jpg", price: 10000 },
  { id: 11, title: "black-shirt", url: "./os photo/shirt3.JPG", price: 19000 },
  {
    id: 12,
    title: "white back-pack",
    url: "./os photo/bag3.jpg",
    price: 18000,
  },
  {
    id: 13,
    title: "modern watch",
    url: "./os photo/watch2.jpeg",
    price: 50000,
  },
  {
    id: 14,
    title: "Wheat sneaker",
    url: "./os photo/shoe1.jpg",
    price: 27000,
  },
  {
    id: 15,
    title: "gray-colour hat",
    url: "./os photo/hat2.jpg",
    price: 16000,
  },
  { id: 16, title: "gray-shirt", url: "./os photo/shirt1.JPG", price: 19000 },
  { id: 17, title: "gray-coat", url: "./os photo/coat2.jpg", price: 48000 },
  {
    id: 18,
    title: "black back-pack",
    url: "./os photo/bag4.jpg",
    price: 22000,
  },
  { id: 19, title: "black-pant", url: "./os photo/pant2.jpg", price: 26000 },
  {
    id: 20,
    title: "fur jacket for men",
    url: "./os photo/jacket1.png",
    price: 50000,
  },
  {
    id: 21,
    title: "slim-fit coat",
    url: "./os photo/coat3.jpeg",
    price: 52000,
  },
  { id: 22, title: "running shoe", url: "./os photo/shoe3.jpg", price: 34000 },
  {
    id: 23,
    title: "black long-coat",
    url: "./os photo/coat1.jpg",
    price: 56000,
  },
  { id: 24, title: "white-shirt", url: "./os photo/shirt2.JPG", price: 19000 },
];
let copyArr = [...products];

let getfromlocalBadge = JSON.parse(localStorage.getItem("cartItem")) || [];
const navBadge = document.getElementsByClassName("nav-cart-badge")[0];
navBadge.innerText = getfromlocalBadge.length ? getfromlocalBadge.length : "0";

const loginTag = document.getElementById("login");
const formpage = document.getElementsByClassName("form-page")[0];
const formDelete = document.getElementsByClassName("form-delete");
let formdeletecopy = [...formDelete];
// detail card
const detailImage = document.querySelector("#detail-image");
const productName = document.querySelector("#product-name");
const originalPrice = document.querySelector("#original-price");
const promoPriceTag = document.querySelector("#promo-price");

const cartBtn = document.querySelector(".cart-btn");

const counter = document.querySelector("#count");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".reduce");

increase.addEventListener("click", () => {
  let num = parseInt(counter.innerText);

  num++;

  counter.innerText = num;
});
decrease.addEventListener("click", () => {
  let num = parseInt(counter.innerText);
  if (num == 1) {
    return;
  }
  num--;
  counter.innerText = num;
});
// suggest items
const suggestImgTags = document.getElementsByClassName("suggest-img");
const suggestTitleTags = document.getElementsByClassName("suggest-title");
const suggestPriceTags = document.getElementsByClassName("suggest-price");

const detailCardRenderFunction = (detailIndex) => {
  let promotionPrice = products[detailIndex].price * 0.9;
  detailImage.src = products[detailIndex].url;
  productName.innerText = products[detailIndex].title;
  originalPrice.innerText = products[detailIndex].price;
  promoPriceTag.innerText = promotionPrice + " Ks";
  cartBtn.id = products[detailIndex].id;
};
cartBtn.addEventListener("click", () => {
  if (!getfromlocalBadge.includes(cartBtn.id)) {
    getfromlocalBadge.push(cartBtn.id);
  }
  localStorage.setItem("cartItem", JSON.stringify(getfromlocalBadge));
  getfromlocalBadge = JSON.parse(localStorage.getItem("cartItem")) || [];
  navBadge.innerText = getfromlocalBadge.length
    ? getfromlocalBadge.length
    : "0";
});
detailCardRenderFunction(detailIndex);
for (let i = 0; i < 8; i++) {
  let randomIndex = Math.floor(Math.random() * copyArr.length);

  let tempObj = copyArr[randomIndex];

  suggestImgTags[i].src = tempObj.url;
  suggestTitleTags[i].innerText = tempObj.title;
  suggestPriceTags[i].innerText = tempObj.price;
  suggestImgTags[i].addEventListener("click", () => {
    localStorage.setItem("imageIdForDetailPage", tempObj.id - 1);
  });
  copyArr.splice(randomIndex, 1);
}
copyArr = [...products];
loginTag.addEventListener("click", () => {
  console.log("hello");
  formpage.classList.add("form-show");
  formdeletecopy.forEach((item) => {
    item.addEventListener("click", () => {
      formpage.classList.remove("form-show");
    });
  });
});
