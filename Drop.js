function Drop (_x){
	this.x = _x || 0;
	this.y = 0;
	this.yspeed = 5;
	this.dropLength = 10;
	this.weight = 1;
}

Drop.prototype.reset = function (){
	this.x = random(0,width);
	this.y = random(-height,-10);
	this.yspeed = random(4,20);
	this.dropLength = map(this.yspeed, 0,20,2,10);
	this.weight = map(this.dropLength,2,10,1,4);
}

Drop.prototype.fall = function (){
	this.y = this.y + this.yspeed;

	this.yspeed += 0.05;
	if(this.y > height){
		this.reset();
	}
}

Drop.prototype.show = function (){
	push();
	stroke(138, 43,226);
	strokeWeight(this.weight);
	line (this.x,this.y,this.x, this.y+this.dropLength);

	pop();
}