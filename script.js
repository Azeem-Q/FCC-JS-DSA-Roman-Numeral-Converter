// Roman Numeral Converter


function convertToRoman(num) {
    let ints = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let romanNum = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
    while (num > 0) {
        for (let i = ints.length - 1; i > 0; i--) {
            if (ints[i] > num) {
                let div = num / ints[i];
            }
        }    
    }
}

console.log(convertToRoman(30));

/*
let romanObj = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
}
*/
//console.log(Math.floor(3549/1000));