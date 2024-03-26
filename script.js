//variables
const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;

const denyList = [helpRegex, dollarRegex];
//End of variables

//functions

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

//End of functions

//Eventlistener
checkMessageButton.addEventListener('click', () => {
    if (messageInput.value === "") {
        alert("Please enter a message.");
        return;
    }

    result.textContent = isSpam(messageInput.value)
        ? "Oh no! This looks like a spam message."
        : "This message does not seem to contain any spam.";
    messageInput.value = "";
});
//End of Eventlistener