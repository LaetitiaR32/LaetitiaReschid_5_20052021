fetch ("http://localhost:3000/api/cameras") //recuperer l'info//
.then(response => response.json ()) //focniton//
.then(data => img.src = data[0].url) //prendre url mettre dans


.catch (function(error) { // signaler une error si le fetch n'arive pas a destination//
    alert(error)
})
