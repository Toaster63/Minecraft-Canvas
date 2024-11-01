
var canvas = new fabric.Canvas('myCanvas');

//1. SET THE POSITION FOR THE PLAYER:
player_x= 10;
player_y = 10;


//2. SET THE WIDTH AND HEIGHT FOR THE CONSTRUCTION BLOCK:
block_image_width =  30 ;
block_image_height =   30 ;

var player_object= "";
var block_image_object= "";

//3. DECLARE THE FUNCTION player_update()

function player_update(){
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	//4. SET THE SCALE FOR THE PLAYER OBJECT:
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	

	player_object.set({
	top:player_y,
	left:player_x
	});
	
	canvas.add(player_object);

	});
}

//5. DECLARE THE FUNCTION new_image(get_image)
function new_image(get_image)    {
	
	fabric.Image.fromURL(block_image_object, function(Img) {
	block_image_object = Img;

	//6. SET THE SCALE FOR THE BLOCK OBJECT:
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
	
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}
//set the 1st event
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(e.shiftKey == true && keyPressed == '80'){
		console.log("p and shift key are pressed");
		block_image_width = block_image_width + 10;
		block_image_height = block_image_height + 10;
		document.getElementById("current_width").innerHTML = block_image_width
		document.getElementById("current_height").innerHTML = block_image_height

	}
	if(e.shiftKey == true && keyPressed == '77'){
		console.log("m and shift key are pressed");
		block_image_width = block_image_width - 10;
		block_image_height = block_image_height - 10;
		document.getElementById("current_width").innerHTML = block_image_width
		document.getElementById("current_height").innerHTML = block_image_height

	}
	if(keyPressed == '38'){
		up();
		console.log("up");
	}
	if(keyPressed == '40'){
		down();
		console.log("down");
	}
	if(keyPressed == '37'){
		left();
		console.log("left");
	}
	if(keyPressed == '39'){
		right();
		console.log("right");
	}
	if(keyPressed == '67'){
		new_image('cloud.jpg');
		console.log("c");

	}
	if(keyPressed == '68'){
		new_image('dark_green.png');
		console.log("c");
	}
	if(keyPressed == '71'){
		new_image('ground.png');
		console.log("c");
	}
	if(keyPressed == '82'){
		new_image('roof.jpg');
		console.log("c");
	}
	if(keyPressed == '84'){
		new_image('trunk.jpg');
		console.log("c");
	}
	if(keyPressed == '85'){
		new_image('unique.png');
		console.log("c");
	}
	if(keyPressed == '76'){
		new_image('light_green.png');
		console.log("c");
	}
	if(keyPressed == '87'){
		new_image('wall.jpg');
		console.log("c");
	}
	if(keyPressed == '89'){
		new_image('yellow_wall.png');
		console.log("c");
	}


}
 function new_image(get_image){
	fabric.Image.fromURL(get_image, function(Img){
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top: player_y,
			left: player_x
			//setting the porperties of an object
		});
		canvas.add(block_image_object);
	
	})

 }
 






function up(){
	if(player_y >= 0){
	player_y = player_y -30;
	canvas.remove(player_object);
	player_update();
	}

}

function down(){
	if(player_y <= 	600){
	player_y = player_y +30;
	canvas.remove(player_object);
	player_update();
	}

}
function left(){
	if(player_x >= -20){
	player_x = player_x -30;
	canvas.remove(player_object);
	player_update();
	}

}
function right(){
	if(player_x <= 1020){
	player_x = player_x +30;
	canvas.remove(player_object);
	player_update();
	}

}

