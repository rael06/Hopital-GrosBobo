"use strict"; // activation du mode strict
(function() {
	// ---------------------------VARIABLES--------------------------
	var audio0 = document.querySelector(".audio_0");
	var screenWidth = document.documentElement.offsetWidth;
	var box = document.querySelector(".box");
	var imageBox = document.querySelector(".image_box");
	var description = document.querySelector(".description");

	// --------------------------FONCTIONS----------------------------
	function populateBox() {
		for(let i = 0, len = bodyMembers.length; i < len; i++) {

			imageBox.innerHTML += '<div class="bouton" data-member-name="' + bodyMembers[i].name + '"></div>';

			description.innerHTML += '\
				<div class="box" data-member-name="' + bodyMembers[i].name + '">\
					<h2 class="title_2">' +bodyMembers[i].titre + '</h2>\
					<div class="text">\
						<p>' + bodyMembers[i].definition + '</p>\
					</div>\
				</div>';
		}
	}

	function boxClick(event) {
		var membre = this.getAttribute("data-member-name");
		var box = $(".box");
		var toSelect = box.filter("[data-member-name='" + membre + "']");
		$(".instructions").css("display", "none");
		$(".bouton").removeClass("selected");
		box.removeClass("selected");
		$(this).addClass("selected");
		toSelect.addClass("selected");

		event.preventDefault();
		event.stopPropagation();
	}

	function boxReset() {
		if (screenWidth < 768) {
			$(".instructions").css("display", "block");
		}
		else {
			$(".instructions").css("display", "none");
		}
		$(".bouton").removeClass("selected");
		$(".box").removeClass("selected");
	}
	
	function initAudioVolumeManager() {
		if(audio0.paused === false) {
			audioVolumeUpdate();
			return;
		}

		audio0.onplay = function() {
			audioVolumeUpdate();
		};
	}

	function audioVolumeUpdate() {
		audio0.volume =  parseFloat(audio0.getAttribute("volume"));
	}

	// ------------------------------ APPEL DES FONCTIONS-------------------------
	
	initAudioVolumeManager();

	populateBox();


	$(".bouton").click(boxClick);

	$(window.document).click(function() {
		boxReset();
	})

	window.addEventListener("resize", function() {
		screenWidth = document.documentElement.offsetWidth;
		boxReset();
	})
})()
