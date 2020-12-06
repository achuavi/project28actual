class Ground{
    constructor(x,y,width,height){
        var opt={
            isStatic:true
        }
        
        this.body=Bodies.rectangle(x,y,width,height,opt);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}