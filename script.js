document.addEventListener("DOMContentLoaded", function() {
    // Typing effect setup
    const textArray = [
        "Web Game Designer.",
        "Founder of Aayush-Tech07.",
        "JavaScript Expert.",
        "Web Developer.",
        "Debugging Pro.",
        "UI/UX Magician.",
        "With 2+ Years of Experience..."
    ];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isBackspacing = false;
    let typingSpeed = 90;
    let backspaceSpeed = 40;
    let pauseTime = 1200;

    const typingElement = document.getElementById('typing-text');
    const cursorElement = document.querySelector('.cursor');

    function type() {
        let currentText = textArray[currentTextIndex];

        if (!isBackspacing && currentCharIndex < currentText.length) {
            typingElement.textContent += currentText.charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(type, typingSpeed);
        } else if (!isBackspacing && currentCharIndex === currentText.length) {
            isBackspacing = true;
            setTimeout(type, pauseTime);
        } else if (isBackspacing && currentCharIndex > 0) {
            typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(type, backspaceSpeed);
        } else {
            isBackspacing = false;
            currentTextIndex = (currentTextIndex + 1) % textArray.length;
            setTimeout(type, 400);
        }
    }
    type();

    // ===== Contact Form Validation & Animation =====
    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById('form-message');

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            messageBox.textContent = "All fields are required!";
            messageBox.style.color = "#ff4e6a";
            animateMessage();
            return;
        }
        // Simple email validation
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            messageBox.textContent = "Please enter a valid email address!";
            messageBox.style.color = "#ffb347";
            animateMessage();
            return;
        }

        messageBox.textContent = "Thank you for reaching out! Your message has been sent.";
        messageBox.style.color = "#00f2fe";
        animateMessage();
        form.reset();
    });

    function animateMessage() {
        messageBox.style.transform = "scale(1.08)";
        messageBox.style.transition = "transform 0.2s";
        setTimeout(() => {
            messageBox.style.transform = "scale(1)";
        }, 200);
    }

    // ===== Magical Card Hover Sparkles =====
    document.querySelectorAll('.magic-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const sparkle = document.createElement('span');
            sparkle.className = 'sparkle';
            sparkle.style.left = (e.clientX - rect.left) + 'px';
            sparkle.style.top = (e.clientY - rect.top) + 'px';
            card.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 600);
        });
    });
});

// ===== Sparkle Effect Styles (inject for demo, move to CSS for production) =====
const sparkleStyle = document.createElement('style');
sparkleStyle.innerHTML = `
.sparkle {
    position: absolute;
    width: 18px;
    height: 18px;
    pointer-events: none;
    border-radius: 50%;
    background: radial-gradient(circle, #fff 0%, #00f2fe 60%, transparent 100%);
    opacity: 0.7;
    animation: sparkle-fade 0.6s linear forwards;
    z-index: 10;
}
@keyframes sparkle-fade {
    0% { opacity: 0.7; transform: scale(0.7);}
    60% { opacity: 1; }
    100% { opacity: 0; transform: scale(1); }
}
`;
document.head.appendChild(sparkleStyle);

