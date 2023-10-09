function reverseArray(array){
    const newArray = [];
    for (let index = array[array.length-1]; index > 0; index--) {
        newArray.push(index);
        
    }
    return newArray;
}

function reverseArrayInPlace(array){
    for (let index = 0; index < array.length/2; index++) {
        let temp = 0;
        temp = array[index];
        array[index] = array[array.length - index - 1];
        array[array.length - index - 1] = temp
    }
    return array;
}
const realArray = [1,2,3,4,5];
console.log(reverseArray(realArray));
console.log(reverseArrayInPlace(realArray));