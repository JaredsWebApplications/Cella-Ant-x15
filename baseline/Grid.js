class Grid {
    // the grid that the ant resides on

    constructor(size=44){
        this.grid = this.createMatrix();
    }

    createMatrix(){
        var grid = [];
        for(let i = 0; i < this.size; ++i){
            let array = [];
            for(let j = 0; j < this.size; ++j){
                array.push(0);
            }
            grid.push(array);
        }
        return grid;
    }

    printMatrix(){
        for(let i = 0; i < this.size; ++i){
            for(let j = 0; j < this.size; ++j){
                process.stdout.write(`${this.grid[i][j]} `)
            }
            console.log("\n");
        }
    }
}
