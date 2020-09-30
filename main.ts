export function intAdd(string: string) : number{
    let listNumber: number[] = []
    let answer: number = 0
    if (!string) {
        return answer
    }
    var splitNumber = string.split(",").map(function(item) {
        return parseInt(item, 10);
    });
    listNumber = listNumber.concat(splitNumber);
    answer = listNumber.reduce((a, b) => a + b, 0)
    console.log(answer)
    return answer
}

intAdd("")
intAdd("1")
intAdd("1,2")
