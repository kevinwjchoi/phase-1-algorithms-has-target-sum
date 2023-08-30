function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === complement) return true;
      }   
  }
  return false;
}
 
/* 
  0(n)
*/

/* 
 hasTargetSum iterates array of numbers.
 set i = 0, minus it from the target.
 set that equal to the complement number.
iterate over to find the complement number.
once found, return true, else return false
*/

/*
  create a function that finds the sum of these numbers in the array.
  first number will be subtracted from the target to deteremine the complement number.
  run the loop till we find a matching number of the complement or till the end. 
  return true if found, else return false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
