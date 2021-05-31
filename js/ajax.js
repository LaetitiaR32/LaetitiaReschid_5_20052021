// GET : demnder à obtenir une information//

/*let request = new XmlHttpRequest();

resquest.onreadystatechange = function () { //évènement javascript //
    if(this.readystate == 4 && this.status == 200){   //requete s'est bien passée//
        console.log(this.responseText)

    }
}
//message de requete//
request.open("GET","http://localhost:3000/api/cameras");
request.send(null); // envoie de la requete//*/



// POST : demander la création d'une nouvelle donnée //

// test 2 récuperer données via la méthode/fetch//
fetch("http://localhost:3000/api/cameras")// envoie d'une requete HTTP de type get au service web//
.then((resp) => resp.json())
.then(function(data) {
    let cameras = data.results;
    return camera.map(function(camera) {
        let li = createNode('li');
        let img = createNode('img');
        let span = createNode('span');
        img.src = camera.picture.medium;
        span.innerHTML = `${camera.name.first} ${camera.name.last}`;
        append(li, img);
        append(li, span);
        append(ul, li);

})
.catch(function(error) {
    console.log(error);
  });

//POST//

const url = 'http://localhost:3000/api/cameras';

let datas = {
  name: 'Sara'
}

let request = new Request(url, {
    method: 'POST',
    body: data,
    headers: new Headers()
});
});

