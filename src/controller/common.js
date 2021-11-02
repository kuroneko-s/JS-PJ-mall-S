let itemsArr = [
  //test data
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
  },
  {
    src: "/static/resources/a.webp",
    title: "title",
    description: "description",
    price: "price",
  },
];

let menusArr = [
  //test data
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title",
    description: "description",
  },
  {
    title: "title1",
    description: "description1",
  },
];

export const main = (req, res) => {
  res.render("main");
};

export const items = (req, res) => {
  res.render("items", { items: itemsArr, menus: menusArr });
};

export const itemDetail = (req, res) => res.render("itemdetail");

export const payment = (req, res) => res.render("payment");

export const success = (req, res) => res.render("success");

export const failed = (req, res) => res.render("failed");
