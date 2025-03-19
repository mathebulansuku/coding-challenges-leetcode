function LongestIncreasingSequence(arr) {
  // code goes here
  if (!arr || arr.length === 0) {
    return 0;
  }

  const n = arr.length;
  const lis = new Array(n).fill(1);

  for (i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
  }

  let maxLength = 0;
  for (let length of lis) {
    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
}

// keep this function call here
console.log(LongestIncreasingSequence(readline()));
