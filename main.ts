export function handleNewLine(string: string): string {
    var newString = string.replace("\n", ","); 
    return newString
}

export function handleDelimiters(string: string): string {
    var newString = string.replace(/.*\n/, ';')
    return newString
}


export function intAdd(string: string) : number{
    let listNumber: number[] = []
    let answer: number = 0
    if (!string) {
        return answer
    }

    // Allow the Add method to handle new lines between numbers
    var string = handleNewLine(string);

    // Support different delimiters
    var string = handleDelimiters(string);

    // Split String to array
    var splitNumber = string.split(",").map(function(item) {
        return parseInt(item, 10);
    });

    listNumber = listNumber.concat(splitNumber);
    
    // Sum Array
    answer = listNumber.reduce((a, b) => a + b, 0)
    return answer
}