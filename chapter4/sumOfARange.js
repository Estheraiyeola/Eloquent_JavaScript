function range(start, end,...steps){
    const container = [];
    let step = 0;
    for(let element of steps){
        step = element;
    }
    if(start < end){
        for (let index = start; index <= end; ) {
            container.push(index);
            index += step;
        }
    }
    else if (start > end){
        for (let index = start; index >= end; ) {
            container.push(index);
            index += step;
        }
    }
    
    return container;
}

function sum(arrayOfNumbers){
    let sumOfNumbers = 0;
    for (let index = 0; index < arrayOfNumbers.length; index++) {
        sumOfNumbers += arrayOfNumbers[index];  
    }
    return sumOfNumbers;
}
console.log(range(5, 0));

// console.log(sum(range(0, 5, 2)));