import { colors } from './Enumerations.js'
import { NumberHelper } from './NumberHelper.js'

const directions = {
    NORTH: 'north',
    EAST: 'east',
    SOUTH: 'south',
    WEST: 'west'
}

class Ant {
    // ant class that can move around and cycle through the colors
    constructor(selector, number){
        this.selectors = selector;
        this.numberClass = new NumberHelper(number);
        this.number = number;
        this.direction = directions.NORTH;
    }
    makeDirections(){
        // true : left (which is West relative to North)
        // false : right (which is East relative North)

        let binaryString = this.numberClass.convertToBinary(this.number);
        let movements = [];
        for(let i = 0;i < binaryString.length; ++i){
            let movement = (binaryString[i] == 1) ? true : false;
            movements.push(movement);
        }
        return movements;
    }

    cycleThroughColors(){
        let bin = convertToBinary(this.numberClass.number);
        let i = 0;
        let colors = [];
        for(let j = 0; j < bin.length; ++j){
            if(i >= this.selectors.length){
                i = 0;
            }
            colors.push(i++);
            //console.log(this.selectors[i++]);
        }
        return colors;
    }
}

let a = new Ant(colors, 21);
console.log(a.makeDirections())
