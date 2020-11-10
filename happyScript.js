	var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var out = false;
var out2 = false;
var color;
var numbe = 20;
var numbe2 = 150;

var testImage = new Image();
	testImage.src = `image/sniper_rifle_PNG33.png`;
	testImage.onload = function () {
		ctx.drawImage(testImage,numbe2,200,900,350)
	}
	
	canvas.onmouseup = function() {
		if(out2 === false) {
			out2 = true;
			setTimeout(function() {
				out2 = false;
			},1000);
		//Андрей Гомик)
		var audio2 = new Audio(`image/attack4.mp3`)
		audio2.play();
		
		var testImage = new Image();
	testImage.src = `image/sniper_rifle_PNG33.png`;
	testImage.onload = function () {
		ctx.drawImage(testImage,numbe2,200,900,350)
	}
		ctx.clearRect(0,0,1100,600);
			numbe2 = 150;
		}
	}
	
	canvas.onmousedown = function() {
		if(out === false) {
			out = true;
			setTimeout(function() {
				out = false;
			},1000);
		
		var audio = new Audio(`image/attack2.mp3`)
		audio.play();
		
		var testImage = new Image();
	testImage.src = `image/sniper_rifle_PNG33.png`;
	testImage.onload = function () {
		ctx.drawImage(testImage,numbe2,200,900,350)
	}
		 numbe2 = numbe2 + numbe;
		 
		 ctx.clearRect(0,0,1100,600,);
		 
		}
	}
	
	document.querySelector(`body`).onkeypress = function(event) {
		if(event.key == "s") {
			
		}
	}
	
	/*var testImage = new Image();
	testImage.src = `image/salut.png`;
	testImage.onload = function () {
		ctx.drawImage(testImage,numbe,numbe2,200,200)*/