"use strict"; // activation du mode strict

// ---------------------------VARIABLES--------------------------
var box = document.querySelector(".box"); // déclaration de la variable box pour écrire avec innerHTML
var description = document.querySelector(".description");

var membre; // déclaration de la variable membre qui stockera uniquement la deuxième classe d'une div représentant un bouton 

// déclaration de l'objet membreObject qui répertorie les 6 objets (les membres) qui sont eux-même stockés dans le fichier objects.js
var membreObject = {
				"epaule" : epaule,
				"bras" : bras, 
				"main" : main, 
				"jambe" : jambe,
				"genou" : genou, 
				"pied" : pied
}
// !

var membreTab = [epaule, bras, main, jambe, genou, pied];
var membreStr = ["epaule", "bras", "main", "jambe", "genou", "pied"];



var screenSize = $(window).width();









// --------------------------FONCTIONS----------------------------
function populateBox() {
	for(let i=0; i<6; i++) {
		description.innerHTML += '<div class="box ' + 'class_' + membreStr[i] + '"><h2 class="title_2">' + membreTab[i].titre + '</h2><p>' + membreTab[i].definition + '</p></div>';
	}

}

function mouseOutFunction() { // fonction quand la souris sort du bouton
	membre = this.classList[1];
	$("." + membre).css("background-color", "rgba(50, 50, 50, 0.7)"); // modification du css de l'élément membreClass avec jquery, 
	$(".class_" + membre).css("background-color", "rgba(250, 250, 250, 0.8)");																// idem pour l'élement ayant la classe box ci-dessous 
}

function mouseInFunction() {
	membre = this.classList[1];
	$("." + membre).css("background-color", "rgba(255, 0, 0, 0.7)");
	$(".class_" + membre).css("background", "rgba(255, 255, 255, 1)");
}

function MouseClickFunction() {

								//fonction quand la souris entre dans le bouton
	membre = this.classList[1]; // this renvoie tout l'élément div déclenché par l'event, 
								// la méthode .classList renvoie un tableau contenant ses classes,
								// [1] renvoie le second élément du tableau.
								// donc la variable membre renverra uniquement la seconde classe de la div qui déclenche l'event
								// par exemple epaule.


// box.innerHTML permet d'écrire le HTML suivant dans la div ayant la classe box,
// membreObject[membre].titre renvoie la valeur de la propriété titre de l'objet membre lui-même stocké dans l'objet membreObject
// par exemple si membre a pour valeur epaule alors on aura membreObject[epaule] et donc avec .titre on demande la valeur de la propriété
// titre de l'objet epaule, et donc on aura dans cet exemple "Epaule :".
// idem pour membreObject[membre].definition

	description.innerHTML = '<div class="box"><h2 class="title_2">' + membreObject[membre].titre + '</h2><p>' + membreObject[membre].definition + '</p></div>';
	$("." + membre).css("background-color", "rgba(50, 50, 50, 0.7");
	$(".box").show(); // modification du css de(s) élément(s) ayant(s) la classe box avec une fonction jquery show() qui fonctionne
						// comme display: block
	$("." + membre).css("background-color", "rgba(255, 0, 0, 0.7"); // modification du css de l'élément ayant pour classe ".la valeur de membre"
	// on pouvait aussi se resservir de la variable membreClass
}







// ---------------------------------------CODE----------------------------------------------
/* faire une condition taille screen >= 768, jquery hover on/outMouseInFonction */

if (screenSize >= 768) {
	populateBox();
	$(".bouton").hover(mouseInFunction, mouseOutFunction);
}


else {
	$(".bouton").click(MouseClickFunction); // création de l'eventlistener en jquery : $ appelle jquery, ("l'élément cible"),
															// la méthode .hover pour le survol, et (fonction 1, fonction 2).
															// fonction 1 s'exécute à l'entrée dans la div par la souris, fonction 2 à la sortie.
}