const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

const reverseStrings = (string) => {
    let arr = string.split('')
    let low = 0;
    let high = string.length-1
    while (low < high) {
        swap(arr, low, high)
        low++
        high--
    }
    return arr.join('')
}

const reverseWords = (string) => {
    let str = string.split('.')
    
    str.forEach((element, i) => {
        str[i] = reverseStrings(element)
    });
    return reverseStrings(str.join('.'))
}

console.log(reverseWords('i.like.this.program.very.much'))
