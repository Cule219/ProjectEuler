/**
  If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

  If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

  NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
 */

const ones = "one,two,three,four,five,six,seven,eight,nine".split(",");
const teens = "ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen".split(
  ","
);
const tens = ",twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety".split(
  ","
);

function countLettersInNo(no) {
  no = [...no.toString()].reverse();
  let letters = "";
  if (no[0] > 0) {
    letters = ones[no[0] - 1];
  }
  if (no[1] > 0) {
    if (no[1] == 1) letters = teens[no[0]];
    else letters = tens[no[1] - 1] + letters;
  }
  if (no[2] > 0) {
    letters = `${ones[no[2] - 1]}hundred${
      letters.length > 0 ? "and" + letters : ""
    }`;
  }
  if (no[3] > 0) {
    letters = `${ones[no[3] - 1]}thousand${
      letters.length > 0 ? "and" + letters : ""
    }`;
  }
  // console.log(letters);
  return letters.length;
}

let count = 0;
for (let i = 1; i <= 1000; i++) {
  count += countLettersInNo(i);
}
console.log(count); //21124
