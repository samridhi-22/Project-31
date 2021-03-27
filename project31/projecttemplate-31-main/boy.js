class Boy{
    constructor(){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(200,450,100,options);
        this.image=loadImage("walking_1.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        
        image(this.image,200,450,200,200);
      }
    };
     
    







