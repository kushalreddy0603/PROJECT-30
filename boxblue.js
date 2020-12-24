class Box extends BaseClass {
        constructor(x,y,width,height) {
        super(x,y,width,height);
        this.Visibility = 225

  }

  display(){
    if(this.boxObject.speed<3){
    super.display();
    fill(124,124 ,6 );
    }
    else{
       World.remove(world,this.boxObject)
       push ()
       this.Visibility=this.Visibility-5
       tint (255,this.Visibility)
       pop ()
     }
}
}