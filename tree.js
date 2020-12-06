class Tree{
    constructor(){
        var opt={
            isStatic:true
        }
        this.body=Bodies.rectangle(600,400,100,100);
        World.add(world,this.body);
    
        this.image=loadImage("tree.png");

    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,600,390,300,600);
    }
}