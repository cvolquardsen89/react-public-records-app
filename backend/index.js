const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(express.json());

// Replace with your actual API Key
const API_KEY = process.env.GEMINI_API_KEY;

const geminiApi = async (prompt) => {
    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
            {
                contents: [{ role: "user", parts: [{ text: prompt }] }],
            }
        );

        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "Error: Unable to process request";
    }
};

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    try {
        const aiResponse = await geminiApi(message);
        res.json({ response: aiResponse });
    } catch (error) {
        console.error("Error processing chat request:", error);
        res.status(500).json({ error: "Failed to process chat request" });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});