/* pseudocode:
    get number of people in space
    for people in space: make a rectangle
    if in ISS, rectangle blue
    if in Shenzou 13, rectangle red
    if anything else, make green
    make rectangles speed across screen
    */

function setup() { 
    createCanvas(windowWidth, windowHeight);
    background("black");
    noStroke();
    loadJSON("https://raw.githubusercontent.com/msol5/Spaceships/main/astros.json", dataReceived);
    space = loadJSON("https://raw.githubusercontent.com/msol5/Spaceships/main/astros.json");
}
class Ship {
    constructor(cColor, x, y) {
        this.color = cColor;
        this.x = x;
        this.y = y;
        this.speed = 0;
    }

    start(speed) {
      this.speed = speed;
    }
  
    display() {
      fill(this.color);
      rect(this.x, this.y, 20, 10);
    }
  
    move() {
      this.x += this.speed;
      if (this.x < -20) {
        this.x = width;
      } else if (this.x > width) {
        this.x = -20;
      }
    }
  }

count = {};  

function dataReceived(data){
    ships = {};

    for (let i = 0; i < data.number; i++){
        count = data.number;
        if (data.people[i].craft == 'ISS') {
            ships[i] = new Ship("blue",random(width),random(height));
            ships[i].start(random(1))

        }
        else if (data.people[i].craft == 'Shenzhou 13') {
            ships[i] = new Ship("red",random(width),random(height));
            ships[i].start(random(2)+1)
        }
        else {
            ships[i] = new Ship("green",random(width),random(height));
            ships[i].start(random(1))
        }
    } 
  }
  
  function draw() { 
      background("black")
      for (let i=0; i < count; i++){
          ships[i].display();
          ships[i].move();
      }
    }
