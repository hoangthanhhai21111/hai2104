class game{
     constructor(){
         console.log('khoi tao game');
         this.canvas= null;
         this.context=null;

         this.nextCanvas = null;
         this.nextContext = null;

         this.init();

     }
     init(){
         // create canvas main Screen
         this.canvas= document.createElement('canvas');
         this. canvas.width = 200;
         this.canvas.height = 400;
         this. context = this.canvas.getContext('2d');
         document.getElementById('mainScreen').appendChild(this.canvas);
         
         // create canvas next Screen
         this.nextCanvas= document.createElement('canvas');
         this.nextCanvas.width = 90;
         this.nextCanvas.height = 75;
         this. nextContext = this.nextCanvas.getContext('2d');
         document.getElementById('nextScreen').appendChild(this.nextCanvas);

         this.context.beginPath();
         this.context.strokeStyle='red';
         this.context.rect(0,0,20,20);
         this.context.stroke();
         
         this.context.fillStyle="red";   
         this.context.fillRect(2,2,16,16);
        //  this.block = new block(this);
        //  this.block.drawMainScreen();
        }
    //  drawMainScreen(){
    //     this.game.context.beginPath();
    //        this.game.context.strokeStyle="red";
    //        this.game.context.rect(0,0,20,20);

    //        this.game.context.fillStyle ="red";
    //        this.game.context.fillRect(2,2,16,16);

    // }
}
var g= new game();
