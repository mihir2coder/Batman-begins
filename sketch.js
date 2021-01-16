const e=Matter.Engine
const w=Matter.World
const bo=Matter.Bodies
var drop=[]
var en,wo
var longm
var store
var t1,t2,t3,t4
var thunder
var man
function preload(){

t1=loadImage("1.png")
t2=loadImage("2.png")
t3=loadImage("3.png")
t4=loadImage("4.png")
man=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}
function setup(){
createCanvas(800,600)
human=createSprite(200,400,20,20)
human.addAnimation("alien",man)
human.scale=0.5
en=e.create()
wo=en.world
}

function draw(){
background(0 )
e.update(en)
if(frameCount%2===0){
longm= new rain(random(20,780),0)
drop.push(longm)
}
for(var i=0;i<drop.length;i++){
    drop[i].display()
}
if(frameCount%10===0){
    thunder=createSprite(random(30,770),random(10,40),10,10)
    store=Math.round(random(1,4))
    switch(store){
        case 1:thunder.addImage("plzrain",t1)
        break
        case 2:thunder.addImage("rain",t2)
        break
        case 3:thunder.addImage("lotofrain",t3)
        break
        case 4:thunder.addImage("water",t4)
        break

    }
thunder.lifetime=10
}
drawSprites()
}   

