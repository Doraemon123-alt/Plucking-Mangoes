class Slingshot{
    constructor(bodyA,pointB)
    {

        var options={

            bodyA:bodyA,
            pointB:pointB,
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
            length:10,
            stiffness:0.02
            
            }

            this.stone=Matter.Constraint.create(options)
            World.add(world,this.stone)

            this.pointB=pointB




}


display()
{

if(this.stone.bodyA){
var pointA,pointB

pointA=this.stone.bodyA.position
pointB=this.stone.pointB





}

}

fly()
{
this.stone.bodyA=null


}



    }

