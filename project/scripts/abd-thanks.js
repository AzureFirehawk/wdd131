let requestTotal = document.querySelector("#requests");

let numRequests = Number(window.localStorage.getItem("numRequests-ls"));

if (numRequests !== 0) {
    numRequests += 1;
    requestTotal.innerHTML = numRequests;
}  else {
    requestTotal.textContent = `This is the first request submitted!`;
    numRequests += 1;
}


window.localStorage.setItem("numRequests-ls", numRequests);

const year = document.querySelector("#currentyear");
const lastmod = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;