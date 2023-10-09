function countBs(string){
    let counter = 0;
    var characterToBeCounted = characterToBeCounted.lower()
    for (const element of string) {
        if (element == "B"){
            counter++;
        }
    }
    return "The letter B is seen in this string in " + counter + "times";

}
console.log(countBs("Bobby"));
