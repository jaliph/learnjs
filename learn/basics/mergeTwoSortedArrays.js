var findMedianSortedArrays = function(nums1, nums1) {
  const merged = merge2Arrays(nums1, nums1)
  const middle = Math.floor((merged.length - 1) / 2)
  return merged.length % 2 == 0 ? (merged[middle] + merged[middle + 1]) / 2 : merged[middle]
};


const merge2Arrays = (arr1, arr2) => {
  if (!arr1 || arr1.length == 0) {
    return arr2
  }

  if (!arr2 || arr2.length == 0) {
    return arr1
  }

  let [ e1, ...rest1] = arr1
  let [ e2, ...rest2] = arr2

  if (e1 <= e2) {
    return [ e1, ...merge2Arrays(rest1, arr2)]
  } else {
    return [ e2, ...merge2Arrays(arr1, rest2)]
  }
}


console.log(findMedianSortedArrays([1,2], [3,4]))