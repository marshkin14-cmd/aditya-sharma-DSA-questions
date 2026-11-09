function secondHighest(arr) {
    let max = arr[0]
    let secondMax = -Infinity
    for (let i=1; i<arr.length; i++){
        if (arr[i]>=max){
            max = arr[i]
        }
    }
    for (let i=0; i<arr.length; i++){
        if (secondMax<=arr[i]<max){
            secondHighest = arr[i]
        }
    }
    if (secondMax == -Infinity) {
        return null;
    }
    return secondMax
}