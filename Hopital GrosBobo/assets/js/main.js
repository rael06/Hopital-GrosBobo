"use strict"; // activation du mode strict
(function() {
	// ---------------------------VARIABLES--------------------------
	var box = document.querySelector(".box");
	var description = document.querySelector(".description");
	var membre;
	var membreObject = {"epaule" : epaule, "bras" : bras, "main" : main, "jambe" : jambe, "genou" : genou, "pied" : pied}
	var membreTab = [epaule, bras, main, jambe, genou, pied];
	var membreStr = ["epaule", "bras", "main", "jambe", "genou", "pied"];

	// --------------------------FONCTIONS----------------------------
	function populateBox() {
		for(let i=0; i<6; i++) {
			description.innerHTML += '<div class="box class_' + membreStr[i] + '"><h2 class="title_2">' + membreTab[i].titre + '</h2><div class="text"><p>' + membreTab[i].definition + '</p></div></div>';
		}

	}

	function mouseInFunction() {
		membre = this.classList[1];
		$("." + membre).addClass("selected");
		$(".class_" + membre).addClass("selected");
		/*$("." + membre).addClass("selected");*/
	}

	function mouseOutFunction() { // fonction quand la souris sort du bouton
		membre = this.classList[1];
		$("." + membre).removeClass("selected");
		$(".class_" + membre).removeClass("selected");
	}

	function mouseClickFunction() {
		$(".box:not(.selected) > .text").fadeOut();
		$(".bouton").removeClass("selected");
		$(".box").removeClass("selected");
		membre = this.classList[1]; 
		//description.innerHTML = '<div class="box"><h2 class="title_2">' + membreObject[membre].titre + '</h2><div><p>' + membreObject[membre].definition + '</p></div></div>';
		$("." + membre).addClass("selected");
		$(".class_" + membre).addClass("selected");
		$(".selected > .text").fadeIn();
	}
	// ------------------------------ APPEL DES FONCTIONS-------------------------

	populateBox();
	$(".bouton").click(mouseClickFunction);
})()
