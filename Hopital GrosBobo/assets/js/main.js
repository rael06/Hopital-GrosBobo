"use strict"; // activation du mode strict
(function() {
	// ---------------------------VARIABLES--------------------------
	var screenWidth = document.documentElement.offsetWidth;
	var audio0 = document.querySelector(".audio_0");
	var box = document.querySelector(".box");
	var imageBox = document.querySelector(".image_box");
	var description = document.querySelector(".description");

	// --------------------------FONCTIONS----------------------------
	function populateBox() {
		for(let i = 0, len = bodyMembers.length; i < len; i++) {

			imageBox.innerHTML += '\
				<div class="bouton" data-member-name="' + bodyMembers[i].name + '"></div>';

			description.innerHTML += '\
				<div class="box" data-member-name="' + bodyMembers[i].name + '">\
					<h2 class="title_2">' +bodyMembers[i].titre + '</h2>\
					<div class="text">\
						<p>' + bodyMembers[i].definition + '</p>\
					</div>\
				</div>';
		}
	}

	function boxOver() {
		var membre = this.getAttribute("data-member-name");
		var box = $(".box");
		var toSelect = box.filter("[data-member-name='" + membre + "']");

		$(this).addClass("selected");
		toSelect.addClass("selected");
	}

	function boxOut() {
		var membre = this.getAttribute("data-member-name");
		var box = $(".box");
		var toSelect = box.filter("[data-member-name='" + membre + "']");

		$(this).removeClass("selected");
		toSelect.removeClass("selected");
	}

	function boxClick(e) {
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

	function boxReset() {
		if(screenWidth < 768) {
			$(".instructions").css("display", "block");
			$(".bouton").removeClass("selected");
			$(".box").removeClass("selected");
		} else {
			$(".instructions").css("display", "none");
			
		}
		
	}
	// ------------------------------ APPEL DES FONCTIONS-------------------------

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

	function isMobile() {
		return !!navigator.userAgent.match(/mobile/i);
	}

	populateBox();
	initAudioVolumeManager();

	/*
	if( isMobile() ) {
		$(".bouton").click(boxClick);
	} else {
		$(".bouton").hover(boxOver, boxOut);
	}*/

	$(".bouton").click(function(e) {
		if(screenWidth < 768) {
			boxClick.bind(this)(e);
		}
	});

	$(window.document).click(function(e) {
		boxReset();
	});

	$(".bouton").hover(function() {
		if(screenWidth >= 768) {
			boxOver.bind(this)();
		}
	}, function() {
		if(screenWidth >= 768) {
			boxOut.bind(this)();
		}
	})

	window.addEventListener("resize", function(e) {
		screenWidth = document.documentElement.offsetWidth;

		if(screenWidth >= 768) {
			boxReset();
		}
	});
	
})()
