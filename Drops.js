class createDrop {
    constructor(x, y, r) {
      var options = {
          isStatic: false,
      }
      
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);

      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("blue");
      ellipse(0, 0, this.r, this.r);
      pop();

      for(var i=0; i<maxDrops; i++){
        this.body.push(new createDrop(random(0,500), random(0,500)));
     }
     


     
    }
  }
  