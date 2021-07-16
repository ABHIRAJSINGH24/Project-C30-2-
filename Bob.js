class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(this.x, this.y, (this.radius)/2, options);
        World.add(world,this.body)
    }
    display(){
        var paperpos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(paperpos.x,paperpos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink");
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}