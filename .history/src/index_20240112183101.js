
const numbers = [2, 4, 8, 6, 3];
// Change code below this line

const pureMultiply = (numbers) => {
  const newArray = [];

  numbers.map(element => {
    newArray.push(element * 2);
  });

  return  console.log(newArray)

};
console.log(pureMultiply())