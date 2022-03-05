
function binarySearch(arr, target) {
  arr = arr.sort()
  return _binarySearch(arr, target, 0, arr.length - 1)

  function _binarySearch(arr, target, low, high) {
    if (low >= high) {
      return -1
    }
    let midIndex = Math.floor((low + high) / 2)
    let mid = arr[midIndex]
    if (target > mid) {
      return _binarySearch(arr, target, mid + 1, high)
    } else if (target < mid) {
      return _binarySearch(arr, target, low, mid - 1)
    } else {
      return midIndex
    }
  }
}

function binarySearchIterative(arr, target) {
  arr = arr.sort()
  let low = 0
  let high = arr.length - 1
  while (low < high) {
    let midIndex = Math.floor((low + high) / 2)
    let mid = arr[midIndex]
    if (target > mid) {
      low = mid
    } else if (target < mid) {
      high = mid
    } else {
      return midIndex
    }
  }
  return -1
}


function main(...functions) {
  const input = [2, 1, 4, 1, 7, 5, 6, 2, 3]
  const target = 5
  functions.forEach(func => console.log(func([...input], target)))
}

main(binarySearch, binarySearchIterative)