class Rope{
    constructor(myA,myB){
        var option = {
            bodyA:myA, 
            pointB:myB,
            stiffness:1.2,
            length:250
        }
        this.pointB = myB
        this.rope = Constraint.create(option)
        World.add(world,this.rope);
    }
    display(){
        
        stroke("yellow");
        line (this.pointB.x,this.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y)
        
        
       

    }

}