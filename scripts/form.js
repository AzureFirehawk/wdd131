const year = document.querySelector("#currentyear");
const lastmod = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

function AddProduct() {
    let select = document.getElementById("productList");
    for (let i = 0; i < products.length; i++) {
        let option = document.createElement("option");
        option.value = products[i].id;
        option.text = products[i].name;
        select.add(option);
    }
}

AddProduct();

const reviewTotal = document.querySelector("#reviews");

let numReviews = Number(window.localStorage.getItem("numReviews-ls"));

if (numReviews !== 0) {
    reviewTotal.textContent = numReviews;
}  else {
    reviewTotal.textContent = `This is the first review!`;
}

numReviews += 1;
window.localStorage.setItem("numReviews-ls", numReviews);