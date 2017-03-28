var d = [];
var dropCount = 100;

function setup() {
	createCanvas(512, 512);
	for(i = 0; i<dropCount; i++){
		var drop = new Drop();
		drop.reset();
		d.push(drop);
	}
}

function draw() {
  background(230, 230, 250);
  for(i = 0; i<100; i++){
  	var drop = d[i];
	  drop.fall();
	  drop.show();
	}
}