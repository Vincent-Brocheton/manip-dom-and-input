function ajouterCommentaire() {
    // On récupère la valeur des inputs avec l'id user et comment
    let userName = document.getElementById("user").value;
    let comment = document.getElementById("comment").value;

    // On récupère la date du jour et on la transforme en jj/mm/aaaa
    let date = new Date();
    let date3 = date.toLocaleDateString();

    // On récupère la div avec l'id comm
    let block = document.getElementById('comm');

    // On créé trois div
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

    // On met au format txt le userName et on le relie dans la première div
    let txt = document.createTextNode(userName);
    div.appendChild(txt);

    // Même principe qu'au dessus, mais on y ajoute du style et une class
    let txt2 = document.createTextNode(comment);
    div2.style.border = '1px solid black';
    div2.setAttribute('class', 'offset-1');
    div2.appendChild(txt2);

    // même chose que pour la première div
    let txt3 = document.createTextNode(date3);
    div3.appendChild(txt3);

    // On relie les 3 div, au block
    block.appendChild(div);
    block.appendChild(div2);
    block.appendChild(div3);

    // On remet la valeur des input a 0
    document.getElementById("user").value = "";
    document.getElementById("comment").value = "";
}