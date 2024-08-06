/* <------------------------------- Binary Search ------------------> */

function binarySearch(arr, target) {
  // * setting the lowest
  let floor = -1;
  // * setting the highest elemeint in the array
  let ceiling = arr.length;
  // * starting the while loop
  while (floor + 1 < ceiling) {
    //finding the middle of the array
    let guess = Math.floor((ceiling + floor) / 2);
    // * if the target is the right guess return guess
    if (arr[guess] === target) return guess;
    // * if guess is greater then the element
    if (arr[guess] > element) {
      // * so we start to check the indexs form guess to the array.length
      ceiling = guess;
    } else {
      // * if not we chek form the 0 index to the to the guess element
      floor = guess;
    }
  }
  //* if the element is not found return -1
  return -1;
}

// we have to find the target
// first we have to set the lowest index
// then we set the lenght of the index to be the celling
// we find the middle by adding the flooe and celing then dividing by 2
// then we start checking if that 'middle' is the target we are looking for
// if its not the target we check if the 'middle' is lower then the celing or greeater then the floor
// and repate the procces unitl we find that targer
