export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Helvetica';
        this.livesImage = document.getElementById('lives');
    }
    draw(context){
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 0;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;
        // score
        context.fillText('Score: ' + this.game.score, 20, 40)
        // timer
        context.font = this.fontSize * 0.8 + ' px' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 75);
        //lives
        for (let i = 0; i < this.game.lives; i++){
            context.drawImage(this.livesImage, 25 * i + 25, 85, 25, 25);
        }
        
        // Instructions
        context.font = this.fontSize * 0.5 + 'px ' + this.fontFamily;
        context.fillStyle = this.game.fontColor;
        context.fillText('Press Arrow Keys to Move and Jump', 625, 25);
        context.fillText('Press Space to Roll (i-frames)', 625, 50);
        context.fillText('Press R to Restart', 625, 75);
        context.font = this.fontSize * 0.6 + 'px ' + this.fontFamily;
        context.fillText('You must score 25 points in 30 seconds to win.', 185, 35);
        
        
        // game over messages
        if (this.game.gameOver){
            context.textAlign = 'center';
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            if (this.game.score >= this.game.winningScore) {
                context.fillText('Good Job', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
                context.fillText('You are an Expert', this.game.width * 0.5, this.game.height * 0.5 + 20);
            } else {
                context.fillText('You Lost', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
                context.fillText('You Got This..', this.game.width * 0.5, this.game.height * 0.5 + 20);
            }
            context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
            context.fillText('Press R to restart', this.game.width * 0.5, this.game.height * 0.5 + 60);
        }
        context.restore();
    }
}