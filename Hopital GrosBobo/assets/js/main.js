"use strict"; // activation du mode strict

(function() {
// -- VARIABLES --
	var screenWidth = document.documentElement.offsetWidth;
	var audio0 = document.querySelector(".audio_0");
	var box = document.querySelector(".box");
	var imageBox = document.querySelector(".image_box");
	var description = document.querySelector(".description");

// -- FUNCTIONS --
	function populateBox() { // generates HTML elements
			for(let i = 0, len = bodyMembers.length; i < len; i++) {

			imageBox.innerHTML += '\
				<div class="bouton" data-member-name="' + bodyMembers[i].name + '"></div>';

			description.innerHTML += '\
				<div class="box" data-member-name="' + bodyMembers[i].name + '">\
					<h2 class="title_2">' + bodyMembers[i].titre + '</h2>\
					<div class="text">\
						<p>' + bodyMembers[i].definition + '</p>\
					</div>\
				</div>';
		}
	}

	function boxClick(e) { // onClick event
		var membre = this.getAttribute("data-member-name");
		var box = $(".box");
		var toSelect = box.filter("[data-member-name='" + membre + "']");
		$(".instructions").css("display", "none");
		$(".bouton").removeClass("selected");
		box.removeClass("selected");
		$(this).addClass("selected");
		toSelect.addClass("selected");
	
		e.preventDefault();
		e.stopPropagation();
	}

	function boxReset() { // reset boxes
		if(screenWidth < 768) {
			$(".instructions").css("display", "block");
			$(".bouton").removeClass("selected");
			$(".box").removeClass("selected");
		} else {
			$(".instructions").css("display", "none");
		}
	}

	// Audio
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
		audio0.volume =  Number(audio0.getAttribute("volume"));
	}
	// ! Audio


// -- RECALLS & LISTENERS --
	populateBox();
	initAudioVolumeManager();

	$(".bouton").click(function(e) {
			boxClick.bind(this)(e);
	});

	$(window.document).click(function(e) {
		boxReset();
	});

	window.addEventListener("resize", function(e) {
		screenWidth = document.documentElement.offsetWidth;

		if(screenWidth >= 768) {
			boxReset();
		}
	});
	
})()
