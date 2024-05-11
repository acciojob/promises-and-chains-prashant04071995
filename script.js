//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting in the traditional way

    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value, 10);

    // Check for empty inputs
    if (!name || isNaN(age)) {
        alert("Please fill in all fields.");
        return;
    }

    new Promise((resolve, reject) => {
        setTimeout(() => {  // Simulate asynchronous operation with setTimeout
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry, ${name}. You aren't old enough.`);
            }
        }, 4000);  // Delay of 4 seconds
    })
    .then(message => alert(message))
    .catch(error => alert(error));
});
