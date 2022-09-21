var strings = ['hello', 'world', 'turtle', 'tiger'];
var nums = [12, 23, 34, 45]
var bool = [true, false, true, true]

// add 'nope!' to end of array
strings.push('nope!');

// remove and return the last element 45
nums.pop();

// create a shallow copy of the array from index 0
// up to but not including index 3 [true, false, true]
bool.slice(0, 3);
