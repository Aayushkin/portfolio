document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for reaching out! I will get back to you soon.");
        form.reset();
    });
});

    // Function to validate form input
    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var messageBox = document.getElementById('form-message');
        
        // Check if the fields are empty
        if (name === "" || email === "" || message === "") {
            messageBox.textContent = "All fields are required!";
            messageBox.style.color = "red";
            return false; // Prevent form submission
        }
        
        // If all fields are filled, show success message
        messageBox.textContent = "Thank you for reaching out! Your message has been sent.";
        messageBox.style.color = "green";
        return true; // Allow form submission
    }
    let textArray = [
        " Web Game Designer.",
        "I am Game Designer.",
        "I am JS Expert.",
        "I am Web Developer.",
        "I am Debugging Expert.",
        "With 2 Years Of Experience...."
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isBackspacing = false;
    let typingSpeed = 150;
    let backspaceSpeed = 100;
    let pauseTime = 1000; // Time to pause after typing one phrase
    
    const typingElement = document.getElementById('typing-text');
    const cursorElement = document.querySelector('.cursor');
    
    // Function to simulate typing and backspacing
    function type() {
        let currentText = textArray[currentTextIndex];
    
        // Typing effect
        if (!isBackspacing && currentCharIndex < currentText.length) {
            typingElement.textContent += currentText.charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(type, typingSpeed);
        }
        // Backspacing effect
        else if (isBackspacing && currentCharIndex > 0) {
            typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(type, backspaceSpeed);
        }
        // Switch to next word after backspacing
        else if (!isBackspacing && currentCharIndex === currentText.length) {
            setTimeout(() => {
                isBackspacing = true;
                type();
            }, pauseTime);
        }
        // Move to next text in array
        else if (isBackspacing && currentCharIndex === 0) {
            currentTextIndex = (currentTextIndex + 1) % textArray.length;
            isBackspacing = false;
            setTimeout(type, typingSpeed);
        }
    }
    
    type();  // Start typing the first text
    
    