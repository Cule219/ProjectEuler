/**
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
 */

const fs = require("fs");
const util = require("util");

const ALPHABET = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const readFile = util.promisify(fs.readFile);

filename = "./22-names-scores.txt";
async function names() {
  let data = await readFile(filename, "utf8");
  data = data
    .replace(/(")|(\r)|(\n)/gi, "")
    .split(",")
    .sort();
  console.log(
    data.reduce((a, v, i) => {
      return a + [...v].reduce((a, v) => a + ALPHABET.indexOf(v), 0) * (i + 1);
    }, 0),
    data[937]
  );
}

names();
