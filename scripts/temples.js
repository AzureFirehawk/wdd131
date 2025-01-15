const year = document.querySelector("#currentyear");
const lastmod = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const nav = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
	nav.classList.toggle('open');
	hamButton.classList.toggle('open');
    h1.classList.toggle('open');
});