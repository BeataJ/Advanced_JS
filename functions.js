const greetUser = (greetingPrefix, userName = 'user') => {
    // console.log(greetingPrefix + " " + userName);
    console.log(`${greetingPrefix} ${userName}!`);
}

greetUser('hi');

function sumUp(...numbers) {
    let result = 0;

    for(const number of numbers) {
        result += number
    }

    return result
}

const inputNumbers = [1, 2, 5, 5, 6];

console.log(sumUp(...inputNumbers));

console.log(sumUp);