fetch("http://localhost:3000/api/cameras") //recuperer l'info//
    .then(function (response) {
        return response.json()  // retourne promesse json
    }).then(function (data) { //résultat reponse .json
        console.log(data);


        try {
            displayProduct(data);
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

function displayProduct(products) { //déclaration de commentaire
    for (let i = 0; i < products.length; i++) {
        //  console.log(products[i].name) 

        //for(let i = 0; displayProduct.length; i++); {   // reperter le tableau 
       // let section = document.createElement("section"); // création section

        let div = document.createElement("div");// création div
        div.classList.add("list_product");// ajout class a ma div
        let img = document.createElement("img");// création des éléments img et p dans ma div
        let p = document.createElement("p");
        let para = document.createElement("p");
        let lense = document.createElement("p");
        let prix = document.createElement("p");


        //insérer les valeurs
        img.alt = products[i].name;
        img.src = products[i].imageUrl;
        p.textContent = products[i].name;
        para.textContent = products[i].description;
        lense.textContent = products[i].lenses;
         prix.textContent = products[i].price;

        //enfants 
        document.getElementById("main").appendChild(div);

       // section.appendChild(div);
        div.appendChild(img); // image enfant de ma div
        div.appendChild(p);
        div.appendChild(para);
        div.appendChild(lense);
        div.appendChild(prix);

    }
}


/*document.getElementById('imageUrl').innerHTML  = imageUrl[0];
document.getElementById('name').innerHTML = name[0];
document.getElementById('description').innerHTML = description[0];
document.getElementById('lenses').innerHTML = lenses[0];
document.getElementById('price').innerHTML = price[0];

for(let i = 0; i < getData.length; i++) {
    console.log("data");
}  */






