module.exports = function toReadable (number) {
    let string = number.toString();
    let output = [];
    // до 20
    let numberArr = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: "eight", 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
   //десятки от 20
   let numberArr2 = { 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'};

   if(number <= 19) {
    output.push(numberArr[number]);
   }

    if(number > 19 && number < 100) {
       let tens = Math.trunc(number / 10) * 10;
        let ones = number - tens;
        output.push(numberArr2[tens]);
         if(string[string.length - 1] !== '0') {
            output.push(numberArr[ones]);
        }        
    }
    
    if(number >= 100) {
        let hundreds = Math.trunc(number / 100);
        output.push(numberArr[hundreds]);
        output.push('hundred');
        if (string[string.length - 2] == '0' && string[string.length - 1] == '0') {
            return output.join(' ');
        } else {
        let tensMore = number - (hundreds * 100);
        if(tensMore > 19) {
        let tens = Math.trunc(tensMore / 10) * 10;
        let ones = tensMore - tens;
        output.push(numberArr2[tens]);
            if(string[string.length - 1] !== '0') {
                output.push(numberArr[ones])
            }        
        } else output.push(numberArr[tensMore]);           
    }
}
     return output.join(' ');
}