// goes from 99 to 999
/**
 * A palindromic number reads the same both ways. The largest palindrome made * * from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

let palindromes = [];
for(let i = 10000; i < 998001; i++) {
  if(i == i.toString().split('').reverse().join('')) {
    for(let j = 101; j < 999; j++) {
      let ij = i/j;
      if(ij === Math.round(ij) && ij > 99 && ij < 999) {
        console.log(j, i/j, i)
        palindromes.push(i);
        break;
      }
    }
  }
}

console.log(palindromes); //913 993 906609