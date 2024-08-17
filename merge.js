let array = [105, 79, 100, 110]

function merge(leftArray,rightArray,lLength,rLength) {
    let newArray = []
    
    let rBegin = 0
    let lBegin = 0
    let nBegin = 0
    while (lBegin < lLength && rBegin < rLength) {
        if (leftArray[lBegin] < rightArray[rBegin]) {
            newArray[nBegin] = leftArray[lBegin]
            lBegin++
            nBegin++
        } else {
            newArray[nBegin] = rightArray[rBegin]
            rBegin++
            nBegin++
        }
        
    }

    for (;lBegin < lLength;lBegin++) {
        newArray[nBegin] = leftArray[lBegin]
        nBegin++
    }

    for (;rBegin < rLength;rBegin++) {
        newArray[nBegin] = rightArray[rBegin]
        nBegin++
    }

    
    return newArray
}

function mergeSort (array) {
    let mid;
    let leftArray = []
    let lLength;
    let rightArray = []
    let rLength;
    let leftArraySorted = []
    let rightArraySorted = []
    let finalArray = []

    if (array.length == 2) {
        let a = array[0];
        let b = array[1];

        if (a > b) {
            let c = a;
            a = b;
            b = c;
            array[0] = a;
            array[1] = b
            return array
        }
        return array
        
    } else {
        if ((array.length % 2) == 0) {
            mid = array.length / 2
            leftArray = array.slice(0,(mid))
            lLength = leftArray.length
            rightArray = array.slice((mid))
            rLength = rightArray.length
            leftArraySorted = mergeSort(leftArray)
            rightArraySorted = mergeSort(rightArray)
            finalArray = merge(leftArraySorted,rightArraySorted,lLength,rLength)
            return finalArray
        } else {
            mid = (array.length + 1) / 2;
            leftArray = array.slice(0,mid)
            lLength = leftArray.length
            rightArray = array.slice(mid)
            rLength = rightArray.length
            leftArraySorted = mergeSort(leftArray)
            rightArraySorted = mergeSort(rightArray)
            finalArray = merge(leftArraySorted,rightArraySorted,lLength,rLength)
            return finalArray
        }
    }
}

console.log(mergeSort(array))
