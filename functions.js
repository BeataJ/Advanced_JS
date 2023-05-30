const greetUser = (greetingPrefix, userName = 'user') => {
    console.log(greetingPrefix + " " + userName);
}

greetUser('hi');

function sumUp(numbers) {
    let result = 0;

    for(const number of numbers) {
        result += number
    }

    return result
}

console.log(sumUp([1,2,5,5,6]));