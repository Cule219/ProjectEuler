/**
    By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
    What is the 10 001st prime number?
 */

let n = 15;
let primes = [2,3,5,7,11,13];
while(primes.length < 10001) {
  n+=2;
  if(isPrime(n)) primes.push(n);
}
console.log(n, primes[10000]);
function isPrime(n) {
    for(i = 2; i <= Number(Math.sqrt(n)); i++)
        if(n % i === 0) return false;
    return true;
}  