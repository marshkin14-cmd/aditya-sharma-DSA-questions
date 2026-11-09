function maxPriceProducts(arr, max){
    let filtered = {}
    for (let i=0; i<arr.length; i++){
        if (arr[i].price < max){
            result.push(arr[i])
        }
    }
    return result
}