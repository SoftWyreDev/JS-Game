export class InputHandler {
    constructor(game){
        this.game = game;
        this.keys = [];
        this.justPressed = new Set(); // Track keys that were just pressed
        
        window.addEventListener("keydown", e => {
            if (e.key === "ArrowDown" || 
                e.key === "ArrowUp" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight") {
                if (this.keys.indexOf(e.key) === -1) {
                    this.keys.push(e.key);
                }
            } else if (e.key === " ") {
                if (!this.keys.includes(" ")) {
                    this.keys.push(" ");
                    this.justPressed.add(" "); // Mark space as just pressed
                }
            // } else if (e.key === 'd') {
            //     this.game.debug = !this.game.debug;
            } else if (e.key.toLowerCase() === 'r') {
                if (window.currentGame) {
                    window.currentGame.reset();
                }
            }
        });
        
        window.addEventListener("keyup", e => {
            if (e.key === "ArrowDown" ||
                e.key === "ArrowUp" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight" ||
                e.key === " ") {
                const index = this.keys.indexOf(e.key);
                if (index !== -1) {
                    this.keys.splice(index, 1);
                }
                this.justPressed.delete(e.key);
            }
        });
    }
    
    // Check if a key was just pressed (only true for one frame)
    wasJustPressed(key) {
        const result = this.justPressed.has(key);
        this.justPressed.delete(key); // Remove it so it's only true for one frame
        return result;
    }
}