class Stone{
    constructor(x,y,radius){
        var opt={
           
            isStatic:false,
            density:1.2
           
        }

        this.body=Bodies.circle(x,y,radius,opt)
        this.radius=radius;
        World.add(world,this.body);
        this.image=loadImage("stone.png");
    }
display(){
    var pos= this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,50,50);
}

}