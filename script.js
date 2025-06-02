// GitHub Webhook Test Script
console.log("Action repo script loaded");

function generateTestEvent() {
    const timestamp = new Date().toISOString();
    console.log(`Test event generated at: ${timestamp}`);
    return {
        event: "test",
        timestamp: timestamp,
        message: "This is a test event from action-repo"
    };
}

// Generate an event when script loads
generateTestEvent();
