let itemsArr = [
  //test data
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
    small: "small",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
    small: "small",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
    small: "small",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
    small: "small",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
    small: "small",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
    small: "small",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
    small: "small",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
    small: "small",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
    small: "small",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
    small: "small",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
    small: "small",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
    small: "small",
  },
];

let menusArr = [
  //test data
  {
    title: "CATEGORY",
    description: "Boots",
    innerCategory: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  },
  {
    title: "BOOTS",
    description: "All",
    innerCategory: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  },
  {
    title: "HEEL HEIGHT",
    description: "ALL",
    innerCategory: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  },
  {
    title: "COLOR",
    description: "ALL",
    innerCategory: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  },
];

export const main = (req, res) => {
  res.render("main");
};

export const items = (req, res) => {
  res.render("items", {
    items: itemsArr,
    menus: menusArr,
    checkboxs: [
      "menu1",
      "cate2",
      "category3 Test",
      "menu1",
      "cate2",
      "category3 Test",
      "menu1",
      "cate2",
      "category3 Test",
    ],
  });
};

export const itemDetail = (req, res) => res.render("itemdetail");

export const payment = (req, res) => res.render("payment");

export const success = (req, res) => res.render("success");

export const failed = (req, res) => res.render("failed");
