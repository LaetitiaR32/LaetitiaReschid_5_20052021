fetch("http://localhost:3000/api/cameras") //recuperer l'info//
    .then(function (response) {
        return response.json()  // retourne promesse json
    }).then(function (data) { //résultat reponse .json
        console.log(data);


        try {
            displayProduct(data);

        } catch (err) {
            console.log(err);
        }

    });

function displayProduct(products) { //déclaration de commentaire
  //  for (let i = 0; i < products.length; i++) { // repéter le tableau
        //  console.log(products[i].name) 

        let div = document.createElement("div");// création div
        div.classList.add("first_product");// ajout class a ma div
        let img = document.createElement("img");// création des éléments img et p dans ma div
        let p = document.createElement("p"); //name
        let descript = document.createElement("p");//description
        let quantity = document.createElement("p");//choix de la quantité de produit
        let lenses = document.createElement("p"); //lentilles option
        let prix = document.createElement("p"); 
        let button = document.createElement("button") //ajout



        //insérer les valeurs
        img.alt = products[0].name;
        img.src = products[0].imageUrl;
        p.textContent = products[0].name;
        p.classList.add("bold");
       // descrip.textContent = products[i].description;
       // lense.textContent = 'Lentilles : '+products[i].lenses;
         prix.textContent = 'Prix : '+products[0].price+'€'; // il doit y avoir un calcule
         button.textContent ='Ajoutez au panier'; // cliquer ici pour accéder à la page produit


        //enfants 
        document.getElementById("main_produit").appendChild(div);

       // section.appendChild(div);
        div.appendChild(img); // image enfant de ma div
        div.appendChild(p);
        div.appendChild(prix);
        div.appendChild(button);
       // div.appendChild(lense);

    } 