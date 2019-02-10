"use strict"; // activation du mode strict

(function() {
	
// --VARIABLES--
	var audio0 = document.querySelector(".audio_0");
	var screenWidth = document.documentElement.offsetWidth;
	var imageBox = document.querySelector(".image_box");
	var description = document.querySelector(".description");
	var that, toSelect;

// --FUNCTIONS--
	function populateBox() { // generates HTML elements
		for (let i = 0, len = bodyMembers.length; i < len; i++) {

			imageBox.innerHTML += '<div class="bouton" data-member-name="' + bodyMembers[i].name + '"></div>';

			description.innerHTML += '\
				<div class="box" data-member-name="' + bodyMembers[i].name + '">\
					<h2 class="title_2">' + bodyMembers[i].titre + '</h2>\
					<div class="text">\
						<p>' + bodyMembers[i].definition + '</p>\
					</div>\
				</div>';
		}
	}

	function selectItem() {
		$(that).addClass("selected");
		toSelect.addClass("selected");
	}

	function deselectItem() {
		$(".bouton").removeClass("selected");
		$(".box").removeClass("selected");
	}

	function buttonClick(event) { // onClick event
		that = this;
		var membre = this.getAttribute("data-member-name"); // string of member name
		toSelect = $(".box").filter("[data-member-name='" + membre + "']"); // member element attribute selected
		$(".instructions").css("display", "none");
		deselectItem();
		selectItem();

		event.preventDefault();
		event.stopPropagation();
	}

	function boxReset() { // reset boxes
		if (screenWidth < 768) {
			$(".instructions").css("display", "block");
		} else {
			$(".instructions").css("display", "none");
		}
		deselectItem();
	}
// Audio
	function initAudioVolumeManager() {
		if (audio0.paused === false) {
			audioVolumeUpdate();
			return;
		}

		audio0.onplay = function() {
			audioVolumeUpdate();
		}
	}

	function audioVolumeUpdate() {
		audio0.volume = Number(audio0.getAttribute("volume"));
	}
// ! Audio

// --Recalls & Listeners--
	initAudioVolumeManager();
	populateBox();
	$(".bouton").click(buttonClick);
	$(window.document).click(function() {
		boxReset();
	})
	window.addEventListener("resize", function() {
		screenWidth = document.documentElement.offsetWidth;
		boxReset();
	})
})()