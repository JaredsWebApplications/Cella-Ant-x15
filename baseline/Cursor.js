class Cursor {
        // positions in R^2
        constructor(){
            this.updatePosition(0, 0);
        }
        get x_pos(){ return this.x; }
        get y_pos(){ return this.y; }

        updatePosition(x, y){
            this.x = x;
            this.y = y;
        }
}
