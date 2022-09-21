function toFactorial(number) {
  if (
    typeof number === 'number' && number>0) {
    return number * toFactorial(number - 1);
  }else if (number === 0) {
    return 1;
  }
  throw new Error('Incorrect parameters');
}

try{
  const result = toFactorial(number);
  console.log(result);
} catch (error) {
  if (error instanceof TypeError) {
    console.log('Bad type');
  }else if (error instanceof RangeError) {
    console.log('range');
  } 
} finally {
  console.log(`Result is`);
}

