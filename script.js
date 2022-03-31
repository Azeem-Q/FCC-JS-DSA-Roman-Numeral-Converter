// Roman Numeral Converter


function convertToRoman(num) {
    let ints = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let romanNum = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
    let finalArr = [];
    let i = 12
    while (num > 0) {
        if (num / ints[i] < 1) {
            --i;
            continue;
        }   else {
            let div = Math.floor(num / ints[i]);
            num = num % ints[i];
            finalArr.push(romanNum[i].repeat(div));
            continue;
        }
    }
    return finalArr.join('');
}

console.log(convertToRoman(1984));
