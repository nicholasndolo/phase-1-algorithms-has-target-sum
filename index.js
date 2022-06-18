function hasTargetSum(array, target) {
  // Write your algorithm here
  //loop through each element in the array
  for(let i=0; i < array.length; i++){
    //loop through the rest of the array addding an element to the ith element in each iteration
    for(let j = i + 1; j < array.length; j++){
      //check if any pair adds up to the target value
      if(array[i] + array[j] === target){
        return true;
      }
    };
  } return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n²)
*/

/* 
  Add your pseudocode here
  loop through each element in the array
  loop through the rest of the array adding elements to the ith element in the first loop
  if any pair adds to the target element 
    return true

/*
  Add written explanation of your solution here
  I need to write a function that takes an array of integers and and a targer integer. The function loop through each element adding to each other element at at a time.
  It should compare the resulting sum with the target integer and return true if there exits a pair that adds up to the taget input. For instance if we pass
  ([3, 4, 8, 6],12)I will expect it to return true since 4 + 8 = 12 which is the target.
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

  console.log("");

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([3, 4, 8, 6], 12))

  console.log("");

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([5, 1, 10, 8, 10], 9))

  console.log("");

  console.log("Expecting: false")
  console.log("=>", hasTargetSum([6, 3, 5, 2, 23, 13, ], 40))
}

module.exports = hasTargetSum;
