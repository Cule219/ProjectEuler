/**
    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
    Find the sum of all the primes below two million.
 */

let sum = 17
for(let i = 11; i < 2000000; i+=2) 
  if(isPrime(i)) sum+=i;
console.log(sum);
// let n = 15;
// let primes = [2,3,5,7,11,13];
// while(n < 2000000) {
//   n+=2;
//   if(isPrime(n)) primes.push(n);
// }
// console.log(primes.reduce((a,v)=>a+v));

function isPrime(n) {
    for(i = 2; i <= Number(Math.sqrt(n)); i++)
        if(n % i === 0) return false;
    return true;
} 

