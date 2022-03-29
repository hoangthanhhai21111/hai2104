class block{
    constructor(game){
        console.log('khoi tao block');
        this.game = game;

    }
    drawMainScreen(){
        let _x = 0;
        let _y = 0;
           this.game.context.beginPath();
           this.game.context.strokeStyle = "red" ;
           this.game.context.rect(0,0,20,20);

           this.game.context.fillStyle  = "red" ;
           this.game.context.fillRect(2,2,16,16);

    }
           
}