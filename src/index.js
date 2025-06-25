// src/index.js

function makeRequest() {
    const url = "https://webhook.site/eb775c30-1e6a-4540-884a-132354edbda6";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        console.log("Response from the server:", data);
        return data;
    } catch (error) {
        console.error("Error making GET request:", error);
        throw error;
    }
}

makeRequest()
