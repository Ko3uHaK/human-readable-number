module.exports = function toReadable (number) {
  let string = number.toString();
  let output = [];
  let des = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: "eight", 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
 let sot = { 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'};

 if(number <= 19) {
  output.pushdes[number];
 }

  if(number > 19 && number < 100) {
     let tens = Math.trunc(number / 10) * 10;
      let ones = number - tens;
      output.push(sot[tens]);
       if(string[string.length - 1] !== '0') {
          output.push(des[ones]);
      }        
  }
  
  if(number >= 100) {
      let hundreds = Math.trunc(number / 100);
      output.push(numbArr[hundreds]);
      output.push('hundred');
      if (string[string.length - 2] == '0' && string[string.length - 1] == '0') {
          return output.join(' ');
      } else {
      let tensMore = number - (hundreds * 100);
      if(tensMore > 19) {
      let tens = Math.trunc(tensMore / 10) * 10;
      let ones = tensMore - tens;
      output.push(sot[tens]);
          if(string[string.length - 1] !== '0') {
              output.push(des[ones])
          }        
      } else output.push(des[tensMore]);           
  }
}
   return output.join(' ');
}
