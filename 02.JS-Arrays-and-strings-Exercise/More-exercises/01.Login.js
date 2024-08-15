function loginSystem(input) {
    const username = input[0];
    const correctPassword = username.split('').reverse().join(''); // Reverse the username
    let attempts = 0;

    for (let i = 1; i < input.length; i++) {
        const password = input[i];
        attempts++;

        if (password === correctPassword) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            if (attempts === 4) {
                console.log(`User ${username} blocked!`);
                return;
            } else {
                console.log("Incorrect password. Try again.");
            }
        }
    }
}

// Test cases
loginSystem(['Acer', 'login', 'go', 'let me in', 'recA']);
loginSystem(['momo', 'omom']);
loginSystem(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);