/**
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */
let digits = "0123456789".split("");

function nPermute(strArr, n) {
  console.log(strArr);
  strArr.sort();

  let i = 1;
  do {
    console.log(strArr.join(""));
    if (i == n) {
      break;
    }
    i++;
  } while (next_permutation(strArr));
  console.log(strArr.join(""));
}

function next_permutation(p) {
  console.log(p);
  for (let a = p.length - 2; a >= 0; --a) {
    if (p[a] < p[a + 1])
      for (let b = p.length - 1; ; --b)
        if (p[b] > p[a]) {
          let t = p[a];
          p[a] = p[b];
          p[b] = t;
          for (++a, b = p.length - 1; a < b; ++a, --b) {
            let t = p[a];
            p[a] = p[b];
            p[b] = t;
          }
          return true;
        }
    return false;
  }
}
nPermute(digits, 1000000);
// 2783915460
