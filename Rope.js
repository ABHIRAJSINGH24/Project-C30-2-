class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            'bodyA':bodyA,
            'bodyB':bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        }
        display(){
            var posA=this.rope.bodyA.position;
            var posB=this.rope.bodyB.position;
            strokeWeight(4);
            var Anchor1x=posA.x;
            var Anchor1y=posA.y;
            var Anchor2x=posB.x+this.offsetX;
            var Anchor2y=posB.y+this.offsetY;
            stroke("blue");
            line(Anchor1x,Anchor1y-bobRadius/2,Anchor2x,Anchor2y);
        }
    }