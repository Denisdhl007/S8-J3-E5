// // // > https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
// // // > Avec la methode removeChild()
// // // ## 1. 
// // // - Utilise le second bouton pour supprimer le premier enfant
// // // ## 2. 
// // // - Utilise le second bouton pour supprimer le dernier enfant 
// // // ## 3 .
// // // - Utilise le dernier bouton pour supprimer un enfant au hasard


// // // > https://developer.mozilla.org/fr/docs/Web/API/Node/replaceChild
// // // > Avec la methode replaceChild()

let button = document.querySelectorAll("input");

button[0].addEventListener('click',()=>{
    document.querySelector("ul").firstChild.remove();
})

button[1].addEventListener('click',()=>{
    document.querySelector("ul").lastChild.remove();
})

button[2].addEventListener('click',()=>{
    let li = document.querySelector("ul").children;
    let rand = Math.floor(Math.random()*li.length);

    li[rand].remove();
})





// // // ## 4 . Dans la partie Remplacement de ton HTML
// // // - Créer un élément li dans ton fichier JS
// // // - Remplace le deuxième li par celui ci quand on clique sur le button exercice 4



let new_li = document.createElement("li");
new_li.innerText = "nouveau li !";

let les_li = document.querySelector("body").children[1].querySelectorAll("li");
console.log(les_li);

button[3].addEventListener('click',()=>{
    les_li[1].before(new_li);
    les_li[1].remove();
})





// // // ## 5. 
// // // - Créer un programme qui permet avec l'input de créer un li et de remplacer le "li" 3 par celui ci en appuyant sur le bouton exercice 5





let bis_li = document.createElement("li");

button[5].addEventListener('click',()=>{
    bis_li.innerText = document.getElementById("replaceValue").value;

    les_li[2].before(bis_li);
    les_li[2].remove(); 
})