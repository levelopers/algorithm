
/**
Worst Case Time Complexity [ Big-O ]: O(n2)
Best Case Time Complexity [Big-omega]: O(n)
Average Time Complexity [Big-theta]: O(n2)
Space Complexity: O(1)
* best case input is sorted array, break outer for loop after one iteration of inner loop
 */
function bubbleSort(arr) {
  let flag = 0 // track if there is a swaping
  for (let i = 0; i < arr.length; i++) { // tracking sorted length
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) { // compare adjacent
        let temp = arr[j] // swap if current is bigger than next value
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = 1
      }
    }
    if (!flag) { // no swaping operation means is a sorted array
      break;
    }
  }
  return arr
}

/**
Worst Case Time Complexity [ Big-O ]: O(n2)
Best Case Time Complexity [Big-omega]: O(n2)
Average Time Complexity [Big-theta]: O(n2)
Space Complexity: O(1)
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) { // track sroted index
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) { // compare and record minimum value index
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    const temp = arr[i] // swap current index with minimum value index
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

/**
Worst Case Time Complexity [ Big-O ]: O(n2)
Best Case Time Complexity [Big-omega]: O(n)
Average Time Complexity [Big-theta]: O(n2)
Space Complexity: O(1)
* best case input is sorted array, no while loop operations
 */
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) { // track sorted index
    let current = arr[i]
    let preIndex = i - 1
    while (preIndex >= 0 && arr[preIndex] > current) { // keep comparing till value is small than arr[i]
      arr[preIndex + 1] = arr[preIndex] // moving value to index + 1
      preIndex--
    }
    arr[preIndex + 1] = current // insert current smallest value
  }
  return arr
}


/**
Worst Case Time Complexity [ Big-O ]: O(n2)
Best Case Time Complexity [Big-omega]: O(n*log n)
Average Time Complexity [Big-theta]: O(n*log n)
Space Complexity: O(n*log n)
* worst case all unbalanced partition arrays, recursive operations O(n)
* best case balanced all the time, recursive operations O(log n)
 */
// take a pivot as first item
// move values smaller than pivot to left and largers to 
// recursively 
function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let pivot = arr[0]
  let left = []
  let right = []
  let equal = []
  for (let item of arr) {
    if (item < pivot) {
      left.push(item)
    } else if (item > pivot) {
      right.push(item)
    } else {
      equal.push(item)
    }
  }
  return [
    ...quickSort(left),
    ...equal,
    ...quickSort(right)
  ]
}

function quickSort2(arr) {

  return _quickSort2(arr, 0, arr.length - 1)

  function _quickSort2(arr, low, high) {
    if (arr.length < 2) {
      return arr
    }
    if (low < high) {
      let p = partition(arr, low, high)
      _quickSort2(arr, low, p - 1)
      _quickSort2(arr, p, high)
    }
    return arr

    function partition(arr, low, high) { // double pointers
      let pivot = arr[Math.floor((low + high) / 2)];
      while (low <= high) {
        while (arr[low] < pivot) {
          low++
        }
        while (arr[high] > pivot) {
          high--
        }
        if (low <= high) {
          let temp = arr[low]
          arr[low] = arr[high]
          arr[high] = temp
          low++
          high--
        }
      }
      return low
    }

  }
}

/**
Worst Case Time Complexity [ Big-O ]: O(n*log n)
Best Case Time Complexity [Big-omega]: O(n*log n)
Average Time Complexity [Big-theta]: O(n*log n)
Space Complexity: O(n)
* recursive operations O(log n )
* merge operations O(n)
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right)) // recursive merge sorted left and right arrays

  function merge(left, right) { // merge two sorted arrays into one sorted array
    let result = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
    while (left.length) {
      result.push(left.shift())
    }
    while (right.length) {
      result.push(right.shift())
    }
    return result
  }
}

function main(...functions) {
  const input = [2, 4, 1, 7, 5, 6, 2, 3]
  functions.forEach(func => console.log(func([...input])))
}

main(bubbleSort, selectionSort, insertionSort, quickSort, quickSort2, mergeSort)
