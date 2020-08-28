class dustbin{
  
    constructor(x,y,w,h)
    {
     
    this.width=w
    this.height=h
    this.dustbin= Bodies.rectangle(x ,y ,w, h,{isStatic:true})
    this.image=loadImage("dustbingreen.png")
    
     World.add(world,this.dustbin)
    }
   
    display() { 
  fill("white")

  imageMode(CENTER)
  image(this.image,this.dustbin.position.x,this.dustbin.position.y,this.width,this.height)
    }

}
