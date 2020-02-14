/**
    A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
    a2 + b2 = c2
    For example, 32 + 42 = 9 + 16 = 25 = 52.
    There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.
 */
let a = 200;
let b = 300;
let c = 500;

while((a**2+b**2) !== c**2) {
  let left = a**2+b**2;
  let right = c**2;
  if(left < right) {
    c--;
    b++;
  } else if(right < left) {
    c++;
    a--;
  }
}
console.log(a*b*c);