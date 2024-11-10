const greetings = [
    "नमस्ते",     // Hindi
    "வணக்கம்",    // Tamil
    "నమస్కారం",   // Telugu
    "ನಮಸ್ಕಾರ",   // Kannada
    "નમસ્તે",     // Gujarati
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
    "নমস্কাৰ",    // Assamese
    "नमस्कार",    // Marathi
    "നമസ്കാരം",   // Malayalam
    "হ্যালো",      // Bengali
    "Hello"       // English
];

const container = document.getElementById('floatingTexts');

// Function to create floating text elements
function createFloatingText(text) {
    const textElement = document.createElement('div');
    textElement.className = 'text';
    textElement.textContent = text;

    // Randomize position and animation duration
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = 7 + Math.random() * 3;

    textElement.style.left = `${x}px`;
    textElement.style.top = `${y}px`;
    textElement.style.animationDuration = `${duration}s`;

    container.appendChild(textElement);
}

// Initialize floating texts
greetings.forEach((greeting) => {
    createFloatingText(greeting);
});
