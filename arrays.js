var strings = ['hello', 'turtle', 'purple', 'world'];
var nums = [12, 23, 34, 45]
var bool = [true, false, true, true]

// add 'nope!' to end of array
strings.push('nope!');

// remove and return the last element 45
var last = nums.pop();
console.log(last)

// create a shallow copy of the array from index 0
// up to but not including index 3 [true, false, true]
bool.slice(0, 3);

for (var i = 0; i < nums.length; i++) {
  console.log(nums[i])
};

// utilize index positions
console.log(strings[0] + ' ' + strings[3])
console.log(`Are ${strings[2]} ${strings[1]}s real?: ${bool[0]}`)
