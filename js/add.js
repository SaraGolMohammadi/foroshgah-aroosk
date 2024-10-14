const searchinput = document.getElementById("search-input");
const products = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".filter");
const priceButton = document.getElementById("search").querySelector("button");


const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selecte");
    } else {
      button.classList.remove("selecte");
    }
  });
};

const searchhansler = (event) => {
  const searchvalue = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const productname = product.children[1].innerText.toLowerCase();
    // console.dir(productname);
    if (productname.includes(searchvalue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};
const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);
  // console.log(filter);
  products.forEach((product) => {
    const category = product.dataset.category;
    console.log(category);
    if (filter === "girl") {
      product.style.display = "block";
    } else if (filter === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const searchpricehandler = (event) => {
  const searchprice = +event.target.parentElement.children[0].value;
  products.forEach((product) => {
    const productprice = product.children[2].innerHTML;
    const price = +productprice.split("$")[1];
    if (!searchprice) {
      product.style.display = "block";
    } else {
      searchprice == price
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
searchinput.addEventListener("keyup", searchhansler);
priceButton.addEventListener("click", searchpricehandler);
