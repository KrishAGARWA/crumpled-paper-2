class lox{
constructor(x,y,width,height){
   
 this.body=Bodies.rectangle(x,y,width,height,{isStatic:true}
)
this.image=loadImage("kk.png")
 
 this.width=width
 this.height=height
 

World.add(world,this.body)


}
display(){
    fill("red")
var pos=this.body.position
imageMode(CENTER)
image(this.image,pos.x,pos.y,this.width,this.height)




}




}