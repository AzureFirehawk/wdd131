let reviewTotal = document.querySelector("#reviews");

let numReviews = Number(window.localStorage.getItem("numReviews-ls"));

if (numReviews !== 0) {
    numReviews += 1;
    reviewTotal.innerHTML = numReviews;
}  else {
    reviewTotal.textContent = `This is the first review!`;
    numReviews += 1;
}


window.localStorage.setItem("numReviews-ls", numReviews);

const year = document.querySelector("#currentyear");
const lastmod = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;