class Mango{
    constructor(x,y,radius){

    
var opt={
    restitution:0,
    friction:1,
    isStatic:true
}
this.body=Bodies.circle(x,y,radius,opt);

this.r=radius;
this.image=loadImage("mango.png");
World.add(world,this.body);
    }
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 60,60);
    pop();
}


}