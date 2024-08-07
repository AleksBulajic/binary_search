
/*<-------------------------- BinarySearch -------------------> */

function binarySearch(arr, element){
    // search through the array non-recursively for the element
    // if the element is not found, return -1
    // if the element is found, return the index at which it was found

    // ceiling and floor are going to be indexes
    // ceiling and floor have to be initialized "outside" of the potential values
    // arrays don't have a -1 index. The lowest is 0
    let floor = -1;
    // .length is always one greater than the last index.
    // So we can set the ceiling to arr.length;
    let ceiling = arr.length;
    //   if the floor "meets" the ceiling, there was no match, and the while loop won't run anymore
    while (floor + 1 < ceiling) {
        // our guess can be the halfway point
        let guess = Math.floor((ceiling + floor) / 2);
        // we need to check actual values now, if it matches, boo yah!
        if (arr[guess] === element) return guess;
        // if the guess value is bigger than element, that means the element should be less than the guess value
        if (arr[guess] > element) {
            // so set the ceiling to guess
            ceiling = guess;
        } else {
        // otherwise, it's on the other side
            floor = guess;
        }
    }
    // if the while loop exited without finding the element, that means that the element wasn't found
    return -1;
}

// Test array
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// Non-recursive binary search tests
console.log(binarySearch(arr, 1)); // Output: 0 (first element)
console.log(binarySearch(arr, 19)); // Output: 9 (last element)
console.log(binarySearch(arr, 7)); // Output: 3 (middle element)
console.log(binarySearch(arr, 8)); // Output: -1 (element not in array)
console.log(binarySearch(arr, 20)); // Output: -1 (element greater than any in array)
console.log(binarySearch(arr, -1)); // Output: -1 (element smaller than any in array)




/* <--------------------------- Recursive Binary Search ----------------------------> */

function recursiveBinarySearch(arr, element, floor = -1, ceiling = arr.length, middle = Math.floor((ceiling + floor) / 2)){
    // if our arr[middle] is our element, middle is the middle;
    if (arr[middle] === element) return middle 
    // if the floor met the ceiling, game over!
    if (floor === ceiling) return -1;
    // if our guess is less than the element, we have to update the floor and the middle point to look at
    if (arr[middle] < element) {
        floor = middle + 1;
    // if our guess is bigger, we change the ceiling
    } else {
        ceiling = middle - 1;
    }
    // update the middle
    middle = Math.floor((ceiling + floor) / 2);
    // then do some recursion
    return recursiveBinarySearch(arr, element, floor, ceiling, middle);
}

// Recursive binary search tests
console.log(recursiveBinarySearch(arr, 1)); // Output: 0 (first element)
console.log(recursiveBinarySearch(arr, 19)); // Output: 9 (last element)
console.log(recursiveBinarySearch(arr, 7)); // Output: 3 (middle element)
console.log(recursiveBinarySearch(arr, 8)); // Output: -1 (element not in array)
console.log(recursiveBinarySearch(arr, 20)); // Output: -1 (element greater than any in array)
console.log(recursiveBinarySearch(arr, -1)); // Output: -1 (element smaller than any in array)