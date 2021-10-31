class Spaceship{
  constructor(x, y, width, height, angle) {
      var options = {
        'isStatic':true

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("spaceship1.png");
      this.image2 = loadImage("spaceship2.png");
      this.image3 = loadImage("spaceship3.png");

      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height);
      pop();
    }

    display2(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
     image(this.image2, 0, 0, this.width, this.height);
      pop();
    }

    display3(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
     image(this.image3, 0, 0, this.width, this.height);
      pop();
    }
}



class ESpaceship{
  constructor(x, y, width, height, angle) {
      var options = {
        'isStatic':true

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Espaceship1.png");
      this.image2 = loadImage("spaceship77.png");
      this.image3 = loadImage("Espaceship4.png");

      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height);
      pop();
    }

    display2(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
     image(this.image2, 0, 0, this.width, this.height);
      pop();
    }

    display3(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
     image(this.image3, 0, 0, this.width, this.height);
      pop();
    }
}

class lazer{
  constructor(x, y, width, height, angle) {
      var options = {
        'isStatic':true

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("bluelazer.png");
      this.image2 = loadImage("redlazer.png");
     

      World.add(world, this.body);
    }
    lazer1(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height);
      pop();
    }

    lazer2(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
     image(this.image2, 0, 0, this.width, this.height);
      pop();
    }


}