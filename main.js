canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	aplhabetkey();
	if((keyPressed >=48 && keyPressed<=57))
	numberkey();
	if((keyPressed >=37 && keyPressed<=40))
	arrowkey();
	if((keyPressed ==17))
	specialkey();
	if((keyPressed ==18))
	specialkey();
	if((keyPressed ==27))
	specialkey();
	if((keyPressed ==13))
	otherkey();
	if((keyPressed ==14))
	otherkey();
	if((keyPressed ==15))
	otherkey();
	if((keyPressed ==127))
	otherkey();
}

function aplhabetkey()
{
 img_image="Alpkey.png";
add();
}
function numberkey()
{
img_image="numkey.png";
add();	
}
function arrowkey()
{
img_image="Arrkey.png";
add();
}
function specialkey()
{
img_image="spkey.png";
add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
