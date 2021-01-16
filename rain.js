class rain{

constructor(x,y){
    var options={
        isStatic:false,
        friction:0.5,
        restitution:0.5, 
      
    }
    this.ball=bo.circle(x,y,10,options)
    w.add(wo,this.ball)
}
display(){
    var r=this.ball.position
    ellipseMode(RADIUS)
    fill("blue")
    ellipse(r.x,r.y,10 )}
}