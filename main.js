var canvas = document.getElementById('canvas');
var ctx = cnavas.getContext('2d');

canvas.width = window.innerWidth - 100;
cnavas.height = window.innerHeight - 100;

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
      ctx.fillstyle = 'green';
      ctx.fillRect(this.x,this.y, this.width,this.height);
    }
}
dino.draw()

class catus{
  constructor(){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    ctx.fillstyle = 'green';
    ctx.fillRect(this.x,this.y, this.width,this.height);
  }
}
var cactus = new cactus();
cactus.draw()

function 프래임마다실행할거(){
  requestAnimationFrame(프레임마다실행할거)

  ctx.cleaRect(0,0, canvaas.width, cnavas.height);

  var cactus = new cactus();
  cactus.draw();
  dino.draw()

}

프래임마다실행할거();