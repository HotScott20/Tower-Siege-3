var block8, block9, block10, block11, block12
var Ground
var Slingshot

//polygon holder with slings
polygon = Bodies.circle(50, 200, 20);
World.add(world, polygon);

slingShot = new Slingshot(this.polygon, {x: 100, y: 200});

ImageMode(CENTER)
Image(polygon_img, polygon.position.x, polygon.position.y, 20, 20);

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}