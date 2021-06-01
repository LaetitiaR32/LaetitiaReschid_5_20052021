fetch ("http://localhost:3000/api/cameras") //recuperer l'info//
.then(function (response)  { 
return response.json ()  // retourne promesse json
}) .then (function(data) { //résultat reponse .json
    console.log(data);
 
    
    try {

        const imageUrl = response[0].imageUrl;
        const name = response[0].name;
        const description = response[0].description;
        const lenses = response[0].lenses;
        const price = response[0].price;

        //afficher données
        console.log(imageUrl);
        console.log(name);
        console.log(description);
        console.log(lenses);
        console.log(price);



    } catch(err) {
        console.log(err);
    }

});

//valide le tableau s'affiche