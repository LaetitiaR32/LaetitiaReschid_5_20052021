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
    for (let i = 0; i < products.length; i++) { // repéter le tableau
        //  console.log(products[i].name) 

       // let section = document.createElement("section"); // création section

        let div = document.createElement("div");// création div
        div.classList.add("list_product");// ajout class a ma div
        let img = document.createElement("img");// création des éléments img et p dans ma div
        let p = document.createElement("p");
        let button = document.createElement("button");
       // let lense = document.createElement("p");
        let prix = document.createElement("p");


        //insérer les valeurs
        img.alt = products[i].name;
        img.src = products[i].imageUrl;
        p.textContent = products[i].name;
        p.classList.add("bold");
       // descrip.textContent = products[i].description;
       // lense.textContent = 'Lentilles : '+products[i].lenses;
         prix.textContent = 'Prix : '+products[i].price+'€';
         button.textContent ='Plus de détails'; // cliquer ici pour accéder à la page produit
         button.classList.add("button_click");


        //enfants 
        document.getElementById("main").appendChild(div);

       // section.appendChild(div);
        div.appendChild(img); // image enfant de ma div
        div.appendChild(p);
        div.appendChild(prix);
        div.appendChild(button);
       // div.appendChild(lense);

    }
}







