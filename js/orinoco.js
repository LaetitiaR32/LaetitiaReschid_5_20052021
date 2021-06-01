
//affichage textes et photos
const affichage_imageUrl = document.querySelector("#imageUrl");  
const affichage_name = document.querySelector("#name");
const affichage_description = document.querySelector("#description");
const affichage_lenses = document.querySelector("#lenses");
const affichage_price = document.querySelector("#price");

affichage_name.innerHTML = name;
affichage_description.innerHTML = description;
affichage_lenses.innerHTML = lenses;
affichage_price.innerHTML = price;

//affichage photos
const image0_imageUrl = '<img src="${http://localhost:3000/images/cameras}">'

affichage_imageUrl.insertAdjacentHTML("afterbegin",image0_imageUrl)





