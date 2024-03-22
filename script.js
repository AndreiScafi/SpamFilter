//variables
const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');
//End of variables
//Eventlistener
checkMessageButton.addEventListener('click', () => {
    if (messageInput.value === "") {
        alert("Please enter a message.");
        return;
    }
});
//End of Eventlistener