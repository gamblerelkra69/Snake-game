let canvas = document.querySelector('.canvas');
var h1 = document.getElementsByTagName('h1')[0]
	var q = 1;
console.log(canvas);
let ctx = canvas.getContext('2d');
console.log(ctx);
let snake = [{x:3,y:17}];
let food = {x:6,y:9};
let dx=0,dy=1;
function drawFood(){
	ctx.fillStyle='red';
	ctx.fillRect(food.x*20,food.y*20,20,20);
}

function drawSnake(snakeEl){
	snakeEl.forEach(segment=>{
		ctx.fillStyle='green';
		ctx.fillRect(segment.x*20,segment.y*20,20,20);
	})
}

function moveSnake(){
	
	let head = {x:snake[0].x+dx, y:snake[0].y+dy};
	snake.unshift(head);
	if(head.x==food.x && head.y==food.y){
	h1.innerText='Point:'+q++
}
	if(head.x==food.x && head.y==food.y){
		food = {x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)}
	}else{
		snake.pop();
	}
	if(head.x>20 || head.x==-1 || head.y>20 || head.y==-1){
		alert('Game Over')
		snake = [{x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)}]
	}
	ctx.clearRect(0,0,canvas.width, canvas.height);
	drawSnake(snake);
	drawFood();
	
}
setInterval(moveSnake,200);

document.addEventListener('keydown',(e)=>{
	console.log(e.key);
	if(e.key=='ArrowDown'){
		if(dy!==-1){
			dx=0;
			dy=1;	
		}
	}else if(e.key=='ArrowUp'){
		if(dy!==1){
			dx=0;
			dy=-1;
		}
	}else if(e.key=='ArrowRight'){
		if(dx!==-1){
			dx=1;
			dy=0;
		}
	}else if(e.key=='ArrowLeft'){
		if(dx!==1){
			dx=-1;
			dy=0;
		}
	}
});