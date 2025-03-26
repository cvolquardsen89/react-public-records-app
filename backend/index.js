const express = require('express');
const { VertexAI } = require('@google-cloud/aiplatform');

const app = express();
const port = 3001;

app.use(express.json());

const vertexAI = new VertexAI({
  project: 'public-records-app', // Replace with your project ID
  location: 'us-central1', // Replace with your location
  apiKey: 'AIzaSyD1BHYffPDsdObmV9nJfBXaQ10FXeiocDY',
});

const model = vertexAI.getGenerativeModel({
  model: 'gemini-1.5-pro-005',
  generation_config: {
    maxOutputTokens: 8192,
    temperature: 0.9,
    topP: 1,
  },
  safety_settings: [
    {
      category: 'HARM_CATEGORY_HARASSMENT',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
    {
      category: 'HARM_CATEGORY_HATE_SPEECH',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
    {
      category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
    {
      category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
  ],
});


app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  console.log('Received message:', message);

  try {
    const request = {
      contents: [{ role: 'user', parts: [{ text: message }] }],
    };

    const response = await model.generateContent(request);
    const aiResponse = response.response.candidates[0].content.parts[0].text;
    res.json({ response: aiResponse });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});