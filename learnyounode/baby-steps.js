// skip first two values
const addends = process.argv.slice(2);

let sum = 0;

for (let i = 0; i < addends.length; i++) {
  sum += Number(addends[i]);
}

console.log(sum);
