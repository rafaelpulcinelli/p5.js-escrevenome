function setup() {
    createCanvas(600, 600);
    background("white");
  
  }
  
  function draw() {
    stroke("blue");
    fill("yellow");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 40);
    }
  }
  