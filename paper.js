class Paper{



constructor(x,y){
var option = {
isStatic:false,
restitution:1,
friction:0,
density:0.7
}
this.x = x;
this.y = y;
this.radius = 40
this.body = Bodies.circle(x,y,this.radius/2,option)
World.add(world,this.body)


}
display(){
var pos = this.body.position
push()
translate(pos.x,pos.y)
fill("red")
ellipseMode(CENTER)
ellipse(0,0,this.radius,this.radius)
pop()



}

}










