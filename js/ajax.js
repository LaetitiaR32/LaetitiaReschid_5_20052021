// GET : demnder à obtenir une information//

let request = new XMLHttpRequestUpload ();

resquest.onreadystatechange = function () {
    if(this.readystate == 4 && this.status == 200){   //requete s'est bien passée//
// les traitements à effectuer quand on a la réponse//
}
}
//message de requete//
request.open("GET","images/v_cam1.jpg");
request.send(); // envoie de la requete//



// POST : demander la création d'une nouvelle donnée //