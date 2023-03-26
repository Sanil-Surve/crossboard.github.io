const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle C code submission
app.post('/api/c-question', async (req, res) => {
  try {
    // Extract C code from request body
    const { code } = req.body;

    // Create temporary C file
    const fs = require('fs');
    const fileName = 'temp.c';
    fs.writeFileSync(fileName, code);

    // Compile C code using gcc
    exec(`gcc ${fileName}`, async (error, stdout, stderr) => {
      if (error) {
        // Compilation error
        res.status(400).json({ success: false, error: stderr });
      } else {
        // Compilation successful, run the program
        exec('./a.out', async (error, stdout, stderr) => {
          if (error) {
            // Program error
            res.status(400).json({ success: false, error: stderr });
          } else {
            // Program successful, return output
            res.status(200).json({ success: true, output: stdout });
          }
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Start server
app.listen(3001, () => console.log('Server running on port 3001'));
