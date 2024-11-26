// List of "channels" (websites)
const channels = [
    { name: "Channel 1: Example", url: "https://example.com" },
    { name: "Channel 2: Wikipedia", url: "https://www.wikipedia.org" },
    { name: "Channel 3: GitHub", url: "https://www.github.com" },
    { name: "Channel 4: Stack Overflow", url: "https://www.stackoverflow.com" },
    { name: "Channel 5: Google", url: "https://www.google.com" }
];

let currentChannel = 0;

// Function to update iframe and channel info
function updateChannel() {
    const channelInfo = document.getElementById("channel-info");
    const tvScreen = document.getElementById("tv-screen");

    // Update iframe source and channel name
    channelInfo.textContent = channels[currentChannel].name;
    tvScreen.src = channels[currentChannel].url;
}

// Listen for keydown events
document.addEventListener("keydown", (event) => {
    if (event.key === "PageUp") {
        // Channel up
        currentChannel = (currentChannel + 1) % channels.length; // Wrap around to the first channel
        updateChannel();
    } else if (event.key === "PageDown") {
        // Channel down
        currentChannel = (currentChannel - 1 + channels.length) % channels.length; // Wrap around to the last channel
        updateChannel();
    }
});

// Initialize the first channel
updateChannel();
