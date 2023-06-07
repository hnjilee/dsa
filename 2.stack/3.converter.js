function converter(decimalNumber) {
  let dec = decimalNumber;
  const remainderStack = [];
  let binaryString = '';

  while (dec > 0) {
    const remainder = Math.floor(dec % 2);
    remainderStack.push(remainder);
    dec = Math.floor(dec / 2);
  }

  while (remainderStack.length > 0) {
    binaryString += remainderStack.pop();
  }

  return binaryString;
}

console.log(converter(10)); // 1010
