// Product of Numbers
function product(nums) {
  if (nums.length === 0) {
      return 1;
  }
  return nums[0] * product(nums.slice(1));
}

// Longest Word
function longest(words) {
  if (words.length === 0) {
      return 0;
  }
  const restLength = longest(words.slice(1));
  return Math.max(words[0].length, restLength);
}

// Every Other Character
function everyOther(str) {
  if (str.length <= 1) {
      return str;
  }
  return str[0] + everyOther(str.slice(2));
}

// Is Palindrome?
function isPalindrome(str) {
  if (str.length <= 1) {
      return true;
  }
  if (str[0] !== str[str.length - 1]) {
      return false;
  }
  return isPalindrome(str.slice(1, -1));
}

// Find Index
function findIndex(arr, str, index = 0) {
  if (index >= arr.length) {
      return -1;
  }
  if (arr[index] === str) {
      return index;
  }
  return findIndex(arr, str, index + 1);
}

// Reverse String
function revString(str) {
  if (str === '') {
      return '';
  }
  return revString(str.slice(1)) + str[0];
}

// Gather Strings
function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
      if (typeof obj[key] === 'string') {
          strings.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
          strings = strings.concat(gatherStrings(obj[key]));
      }
  }
  return strings;
}

// Binary Search (Not implemented recursively as binary search is typically not a recursive algorithm)
function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === val) {
          return mid;
      } else if (arr[mid] < val) {
          return binarySearch(arr, val, mid + 1, right);
      } else {
          return binarySearch(arr, val, left, mid - 1);
      }
  }
  return -1;
}
