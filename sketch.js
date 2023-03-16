// this is for your game/web toy
var gameBackgroundImage;
var meteor;
var meteors;
var ship;
var meteorPositionX = [];
var meteorPositionY = [];
var meteorCount = 21;

function preload() {
  gameBackgroundImage = loadImage('assets/gameBackground.jpg');
}

function setup() {
  createCanvas(1425, 1000);

  for (var i = 0; i < meteorCount; i++) {
    meteorPositionX[i] = random(width);
    meteorPositionY[i] = random(height);
  }

  meteors = new Group;
  meteors.x = width;

  for (var i = 0; i < meteorCount; i++)  {
    let meteor = new meteors.Sprite(meteorPositionX[i], meteorPositionY[i], 50, 50);
	  meteor.img = 'assets/meteor.png';
    meteor.scale = 0.2;
    meteor.x = width;
    meteor.vel.x = -3;
    meteor.vel.y = 0.05;

  }

	ship = new Sprite(0, 0, -100, -100);
  ship.scale = 0.5
  ship.height = 50;
  ship.width = 200;
  ship.img = 'assets/spaceShip.png';
}

function draw() {
  background(gameBackgroundImage);

  ship.moveTowards(mouse, 0.10);

  for (var i = 0; i < meteorCount; i++) {
      if (meteors[i].x < 10) {
        meteors[i].x = random(width);
        meteors[i].y = random(height);
      }
      
  if (meteors[i].collides(ship)) {
    ship.img = 'assets/explosion.png';
  } 
  }

  if (kb.pressing('up')) {
    ship.img = 'assets/spaceShip.png';
  }
}  