const greetUser = (greetingPrefix, userName = 'user') => {
    console.log(greetingPrefix + " " + userName);
}

greetUser('hi');