let word = "krisna adila putra"
let increment = parseInt(word.length/2)
let index = []


String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}
 
let randomNum = Math.floor((Math.random() * word.length) + 1)

index.push(randomNum)

for(let i = 0; i<increment-1; i++){

    let newRand= 0

    newRand = Math.floor(Math.random() * word.length);
    if (newRand >= randomNum && newRand+2 <= word.length) {
        newRand += 2;
    }

    
    index.push(newRand)
}

index.forEach(element => {
    word = word.replaceAt(element, word.charAt(element).toUpperCase())
    
});

console.log(word)


