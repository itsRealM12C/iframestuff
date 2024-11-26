// List of websites to cycle through
const websites = [
    "https://example.com",
    "https://www.wikipedia.org",
    "https://www.github.com",
    "https://www.stackoverflow.com",
    "https://www.google.com"
];

let currentIndex = 0;

// Function to update the iframe's src
function updateIframe(index) {
    const iframe = document.getElementById("iframe");
    iframe.src = websites[index];
}

// Add event listener for key presses
document.addEventListener("keydown", (event) => {
    if (event.key === "PageUp" || event.key === "PageDown") {
        event.preventDefault(); // Prevent default scrolling behavior

        if (event.key === "PageUp") {
            // Navigate to the previous website
            currentIndex = (currentIndex - 1 + websites.length) % websites.length;
        } else if (event.key === "PageDown") {
            // Navigate to the next website
            currentIndex = (currentIndex + 1) % websites.length;
        }

        updateIframe(currentIndex);
    }
});
