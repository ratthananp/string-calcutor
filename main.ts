

function handleNewLine(string: string): string {
    var newString = string.replace("\n", ","); 
    return newString
}

function handleDelimiters(string: string): string {
    var newString = string.replace(/.*\n/, ';')
    return newString
}

function removeNumbersBiggerThan(array: number[]): number[] {
    var new_arr = array.filter(function(x) {
        return x < 1000;
    });
    return new_arr
}

function negativesNotAllowed(string: string): void {
    // const regex = "^-\d+$";
    // var isNegatives = regex.test(string);
    // if (isNegatives) {
        throw Error("Negatives not allowed")
    // }
}


export function intAdd(string: string) : number{
    let listNumber: number[] = []
    let answer: number = 0
    if (!string) {
        return answer
    }

    // negativesNotAllowed(string);

    // Allow the Add method to handle new lines between numbers
    var string = handleNewLine(string);
    
    // Support different delimiters
    // var string = handleDelimiters(string);

    // Split String to array
    var splitNumber = string.split(",").map(function(item) {
        return parseInt(item, 10);
    });

    listNumber = listNumber.concat(splitNumber);

    // Numbers bigger than 1000 should be ignored
    listNumber = removeNumbersBiggerThan(listNumber);

    // Sum Array
    answer = listNumber.reduce((a, b) => a + b, 0)
    return answer
}