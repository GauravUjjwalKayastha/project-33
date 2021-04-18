class Snow
{
    constructor(x,y){
        var options={
            density: 0.3,
        
        }
        this.body=Bodies.rectangle(x,y,30,30,options);
        this.width=30;
        this.height=30;
        this.image=loadImage("snow4.webp");
        World.add(world,this.body);

    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,20,20);


    }
}