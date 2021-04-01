/**
 * 找出数组中最小的k个数
 * @param {*} arr 
 * @param {*} k 
 */

 /**
  * 快速排序的辅助函数，帮助我们快速将数组划分为左边 < 枢轴 < 右边这样的结构
  * @param {*} arr 
  * @param {*} start 
  * @param {*} end 
  */
function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function partition(arr, start, end) {
    const middle = Math.floor(Math.random() * (end - start)) + start
    swap(arr, middle, end)

    let small = start - 1
    for(let index = start; index < end; index++) {
        if(arr[index] <= arr[end]) {
            small++
            if(small !== index) {
                swap(arr, small, index)
            }
        }
    }
    small++
    swap(arr, small, end)
    return small
}

function minK(arr, k) {
    if(arr.length < k) return []
    let start = 0;
    let end = arr.length - 1

    let index = partition(arr, start, end)

    while(index !== k - 1) {
        if(index > k - 1) {
            end = index - 1
        }else{
            start = index + 1
        }

        index = partition(arr, start, end)
    }

    return arr.slice(0, k)
}

const str = [0, 0, 0, 2, 0, 5]

console.log(minK(
    str,
    1
))

// console.log(partition(str, 0, str.length - 1))

/**
 * 最小堆实现 最小的k个数
 */

 