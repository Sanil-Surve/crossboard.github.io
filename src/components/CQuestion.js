import React, { useState } from 'react';
import "./CQuestion.css";

const CQuestion = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/c-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });
      const data = await response.json();
      if (data.success) {
        // Program ran successfully, set output
        setOutput(data.output);
        setError('');
      } else {
        // Error occurred, set error message
        setOutput('');
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      // Server error, set error message
      setOutput('');
      setError('An error occurred while submitting your code.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="code">Enter your C code:</label>
        <br />
        <textarea
          id="code"
          name="code"
          rows="10"
          cols="50"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
      {output && (
        <div>
          <h2>Output:</h2>
          <pre>{output}</pre>
        </div>
      )}
      {error && (
        <div>
          <h2>Error:</h2>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
};

export default CQuestion;

