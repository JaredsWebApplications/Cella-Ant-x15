export class NumberHelper {
    // helps construct binary representation of number
    constructor(number){
        this.number = number;
    }

    convertToBinary(){
        // please figure this out yourself
        // source : https://www.programiz.com/javascript/examples/decimal-binary
        let copy = this.number;
        let binary = 0;
        let remainder, i = 1, step = 1;
        while(copy != 0){
            remainder = copy % 2;
            copy = parseInt(copy / 2);
            binary = binary + remainder * i;
            i = i * 10;
        }
        return binary.toString();
    }
}



