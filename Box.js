class Box{
    constructor(x,y,width,height){
        var Option={
            restitution:0.8,
            friction:0.3,
            density:1.0
                  }
          this.body=Bodies.rectangle(x,y,width,height,Option);
          World.add(world,this.body);
          this.width=width;
          this.height=height;
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push() ;
        translate(pos.x,pos.y)
        rotate(angle);
        fill("white");
        rectMode(CENTER);
        rect (0,0,this.width,this.height);
        pop();
    }
}