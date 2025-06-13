import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Optional: For styling

const AIChatComponent = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await axios.post('http://localhost:3000/api', { prompt });
      console.log(res)
      setResponse(res.data.message.content || 'No response received');
    } catch (err) {
      setError('Failed to fetch AI response. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-chat-container">
      <h2>AI Chatbot</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          rows={4}
          disabled={loading}
        />
        <button type="submit" disabled={loading || !prompt.trim()}>
          {loading ? 'Loading...' : 'Get AI Response'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {response && (
        <div className="response">
          <h3>AI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIChatComponent;