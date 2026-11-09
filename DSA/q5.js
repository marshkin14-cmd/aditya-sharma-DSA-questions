function findMissing(arr,n) {
    let sum = 0
    for (let i=0;i<arr.length;i++) {
        sum+=arr[i]
    }
    return ((n*(n+1))/2) - sum
}

        

        console.log(moveZeroes([0,5,0,3,8,0,2]))