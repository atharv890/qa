canvas=new fabric.Canvas("myCanvas");
bally=0;
ballx=0;
holey=400;
holex=800;
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		block=Img;
		block.scaleToWidth(50);
		block.scaleToHeight(50);
		block.set({
		top:holey,
		left:holex
		});
		canvas.add(block);
		});
		}
		function new_image(){
		fabric.Image.fromURL("ball.png",function(Img){
			ball=Img;
			ball.scaleToWidth(50);
			ball.scaleToHeight(50);
			ball.set({
			ball:ball_y,
			ball:ball_x
			});
			canvas.add(ball);
			});
if((ballx==hole_x) &&(bally== holey)){
canvas.remove(ball);
canvas.add("You have hit the goal");
document.getElementById("myCanvas").style.borderColor="red";
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bally<=0){;
		bally= bally-block_image_height;
		console.log("block image height = "-block_image_height );
		console.log("When up key is pressed ,X = " +ballx +", Y = "+ bally );
		canvas.remove(ball);
		new_image();
		}
	} 

	function down()
	{
		if(bally<=700){;
		bally= bally+block_image_height;
		console.log("block image height = "+block_image_height );
		console.log("When down key is pressed ,X = " +ballx +", Y = "+ bally );
		canvas.remove(ball);
		new_image();
		}
	}

	function left()
	{
		if(ballxx >5)
		{
			ballx= ballx-block_image_width;
			console.log("block image width = "-block_image_width);
			console.log("When left key is pressed ,X = " +ballx +", Y = "+ bally );
			canvas.remove(ball);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			if(ballxx >5)
		{
			ballx= ballx-+block_image_width;
			console.log("block image width = "+block_image_width);
			console.log("When left key is pressed ,X = " +ballx +", Y = "+ bally );
			canvas.remove(ball);
			new_image();
		}
		}
	}
	
}

