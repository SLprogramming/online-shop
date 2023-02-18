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
let getfromlocalBadge = JSON.parse(localStorage.getItem("cartItem")) || [];
console.log(getfromlocalBadge);
const homeImages = document.getElementsByClassName("home-img");
const homeTitle = document.getElementsByClassName("home-title");
const homePrice = document.getElementsByClassName("home-price");
const loginTag = document.getElementById("login");
const formpage = document.getElementsByClassName("form-page")[0];
const formDelete = document.getElementsByClassName("form-delete");
const cartBtn = document.getElementsByClassName("cart-btn");
const navBadge = document.getElementsByClassName("nav-cart-badge")[0];

navBadge.innerText = getfromlocalBadge.length ? getfromlocalBadge.length : "0";
let formdeletecopy = [...formDelete];
let detailIndex = 0;
// const detailImage = document.getElementById("detail-image");
for (let i = 0; i < products.length; i++) {
  cartBtn[i].id = products[i].id;
  homeImages[i].id = products[i].id;
  homeImages[i].src = products[i].url;
  homeTitle[i].innerText = products[i].title;
  homePrice[i].innerText = products[i].price + "ks";
  // detailId = arr[i].id;
  // console.log(detailId);
}
let cartBtnArr = [...cartBtn];
let cartIdArr = [...getfromlocalBadge];
cartBtnArr.forEach((item) => {
  item.addEventListener("click", () => {
    if (!cartIdArr.includes(item.id)) {
      cartIdArr.push(item.id);
    }

    localStorage.setItem("cartItem", JSON.stringify(cartIdArr));
    getfromlocalBadge = JSON.parse(localStorage.getItem("cartItem")) || [];
    navBadge.innerText = getfromlocalBadge.length
      ? getfromlocalBadge.length
      : "0";
  });
});

let imageArr = [...homeImages];
imageArr.forEach((item) => {
  item.addEventListener("click", () => {
    detailIndex = item.id - 1;
    localStorage.setItem("imageIdForDetailPage", detailIndex);
  });
});
loginTag.addEventListener("click", () => {
  console.log("hello");
  formpage.classList.add("form-show");
  formdeletecopy.forEach((item) => {
    item.addEventListener("click", () => {
      formpage.classList.remove("form-show");
    });
  });
});
