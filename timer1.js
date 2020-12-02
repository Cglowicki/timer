let input = process.argv.slice(2);
let x = 0;
for (let x of input) {
  
  if (x === "" || x < 0 || isNaN(x)) {
    console.log('error, man!');
    break;
  }

  setTimeout(() => {
    process.stdout.write('.');
    input.length - 1 && process.stdout.write('\n');
  }, x * 1000);
};
