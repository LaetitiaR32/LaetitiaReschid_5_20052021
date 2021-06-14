fetch("http://localhost:3000/api/cameras") //recuperer l'info//
    .then(function (response) {
        return response.json()  // retourne promesse json
    }).then(function (data) { //résultat reponse .json
        console.log(data);
        for(let i = 0; data.length; i++); 

        try {
            displayProduct(data)
            /*  const imageUrl = data[0].imageUrl;
              const name = data[0].name;
              const description = data[0].description;
              const lenses = data[0].lenses;
              const price = data[0].price; 

              //afficher données
              console.log(imageUrl);
              console.log(name);
              console.log(description);
              console.log(lenses);
              console.log(price);*/

        } catch (err) {
            console.log(err);
        }

    });

function displayProduct(product) { //déclaration de commentaire
    console.log(product);   
}
//for(let i = 0; displayProduct.length; i++); {   // reperter le tableau 
let div = document.createElement("div");// création div
div.classList.add("list_product");// ajout class a ma div
let img = document.createElement("img");// création des éléments img et p dans ma div
let p = document.createElement("p");

//insérer les valeurs
    p.textContent = cameras[i].name;
    p.textContent = cameras[i].description;
    p.textContent = cameras[i].lenses;
    p.textContent = cameras[i].price;

//enfants 
document.getElementById("main").appendChild(div);
div.appendChild(img); // image enfant de ma div
div.appendChild(p);





/*document.getElementById('imageUrl').innerHTML  = imageUrl[0];
document.getElementById('name').innerHTML = name[0];
document.getElementById('description').innerHTML = description[0];
document.getElementById('lenses').innerHTML = lenses[0];
document.getElementById('price').innerHTML = price[0];

for(let i = 0; i < getData.length; i++) {
    console.log("data");
}  */






