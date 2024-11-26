// Define channels (websites)
const channels = [
    { name: "Channel 1: Example", url: "https://example.com" },
    { name: "Channel 2: Wikipedia", url: "https://www.wikipedia.org" },
    { name: "Channel 3: GitHub", url: "https://www.github.com" },
    { name: "Channel 4: Stack Overflow", url: "https://www.stackoverflow.com" },
    { name: "Channel 5: Google", url: "https://www.google.com" }
];

let currentChannelIndex = 0; // Start on the first channel

// Function to update the iframe and channel info
function updateChannel() {
    const iframe = document.getElementById("tv-screen");
    const channelInfo = document.getElementById("channel-info");

    // Update the iframe to show the new channel
    iframe.src = channels[currentChannelIndex].url;

    // Update the channel info overlay
    channelInfo.textContent = channels[currentChannelIndex].name;
}

// Listen for PageUp or PageDown key presses
document.addEventListener("keydown", function(event) {
    if (event.key === "PageUp") {
        // Move to the next channel (wrap around if needed)
        currentChannelIndex = (currentChannelIndex + 1) % channels.length;
        updateChannel();
    } else if (event.key === "PageDown") {
        // Move to the previous channel (wrap around if needed)
        currentChannelIndex = (currentChannelIndex - 1 + channels.length) % channels.length;
        updateChannel();
    }
});

// Initialize the first channel when the page loads
updateChannel();
