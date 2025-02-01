const year = document.querySelector("#currentyear");
const lastmod = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navclass = document.querySelector('.nav');
const nav = document.querySelector('nav');
const h1 = document.querySelector('h1');

hamButton.addEventListener('click', () => {
	nav.classList.toggle('open');
	hamButton.classList.toggle('open');
    h1.classList.toggle('open');
    navclass.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        year: 2005,
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, USA",
        dedicated: "1888, May, 21",
        year: 1888,
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, USA",
        dedicated: "2015, June, 7",
        year: 2015,
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        year: 2020,
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, USA",
        dedicated: "1974, November, 19",
        year: 1974,
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        year: 1986,
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        year: 1983,
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Snowflake Arizona",
        location: "Snowflake Arizona, USA",
        dedicated: "2002, March, 3",
        year: 2002,
        area: 18321,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/snowflake-arizona/400x250/snowflake-temple-lds-137896-wallpaper.jpg"
    },
    {
        templeName: "Newport Beach California",
        location: "Newport Beach, California, USA",
        dedicated: "2005, August, 28",
        year: 2005,
        area: 17800,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/newport-beach-california/400x250/newport-beach-california-temple-1169298-wallpaper.jpg"
    },
    {
        templeName: "St. Louis Missouri",
        location: "St. Louis, Missouri, USA",
        dedicated: "1997, June, 5",
        year: 1997,
        area: 158749,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-louis-missouri/400x250/st-louis-temple-lds-903363-wallpaper.jpg"
    },
    {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona, USA",
        dedicated: "1927, October, 26",
        year: 1927,
        area: 75000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_news_conference.jpeg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, USA",
        dedicated: "1884, May, 19",
        year: 1884,
        area: 119619,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768083-wallpaper.jpg"
    }
];

function templeCards(array) {
    document.querySelector(".temples").innerHTML = "";
    array.forEach(temple => {
        let card = document.createElement("figure");
        let info = document.createElement("figcaption");
        let image = document.createElement("img");
        
        info.innerHTML = `<h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>`;
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`
        image.width = 350;
        image.loading = "lazy";
        card.setAttribute("class", "templeCard");
        card.appendChild(info);
        card.appendChild(image);
        document.querySelector(".temples").appendChild(card);
    });
}

templeCards(temples)


const title = document.querySelector(".title");
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
    templeCards(temples);
    homeLink.classList.add("active");
    oldLink.classList.remove("active");
    newLink.classList.remove("active");
    largeLink.classList.remove("active");
    smallLink.classList.remove("active");
    title.innerHTML = "Home";
});

oldLink.addEventListener("click", () => {
    templeCards(temples.filter(temple => temple.year < 1900));
    homeLink.classList.remove("active");
    oldLink.classList.add("active");
    newLink.classList.remove("active");
    largeLink.classList.remove("active");
    smallLink.classList.remove("active");
    title.innerHTML = "Old Temples";
});

newLink.addEventListener("click", () => {
    templeCards(temples.filter(temple => temple.year > 2000));
    homeLink.classList.remove("active");
    oldLink.classList.remove("active");
    newLink.classList.add("active");
    largeLink.classList.remove("active");
    smallLink.classList.remove("active");
    title.innerHTML = "New Temples";
});

largeLink.addEventListener("click", () => {
    templeCards(temples.filter(temple => temple.area > 90000));
    homeLink.classList.remove("active");
    oldLink.classList.remove("active");
    newLink.classList.remove("active");
    largeLink.classList.add("active");
    smallLink.classList.remove("active");
    title.innerHTML = "Large Temples";
});

smallLink.addEventListener("click", () => {
    templeCards(temples.filter(temple => temple.area < 10000));
    homeLink.classList.remove("active");
    oldLink.classList.remove("active");
    newLink.classList.remove("active");
    largeLink.classList.remove("active");
    smallLink.classList.add("active");
    title.innerHTML = "Small Temples";
});
