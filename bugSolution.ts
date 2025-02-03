function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(1, 2); //This will return 3
console.log(result); //3

try {
    let result2 = add(1, "2");
    console.log(result2); //This line won't be reached
} catch (error) {
    console.error(error.message); //Throws an error
}
