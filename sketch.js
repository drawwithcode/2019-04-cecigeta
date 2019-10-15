var mySong;
var analyzer;
var myImage;



function preload() {
  // put preload code here
  mySong = loadSound("[FREE] SZA x Frank Ocean Type Beat - By Myself.mp3");
  myImage = loadImage("foglia.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

  imageMode(CENTER);
  image(myImage, width / 2, height / 2, 300, 400);



  // put setup code here
}

function draw() {
  // put drawing code here
  noCursor();
  var volume = 0;
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);
  mySong.play();
  mySong.setVolume(0.01);

  background(240);

  loadPixels();

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {

      var index = (x + y * width) * 4;
      pixels[index] = x / 3.5;
      pixels[index + 1] = random(volume + 20);
      pixels[index + 2] = y;
      pixels[index + 3] = 255;

    }
  }
  updatePixels();

  image(myImage, mouseX, mouseY, 200 + volume, 300 + volume);

  var myText = "click and relax";
  textFont("Archivo Black");
  textAlign(CENTER);
  textSize(30);
  fill(240);
  text(myText, width / 2, height / 2);



}
