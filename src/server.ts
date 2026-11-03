import type { Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic GET route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to your TypeScript Express Server! after a long time with a minor bug');
});
    
// Basic API GET route returning JSON
app.get('/api/health', (req: Request, res: Response) => {

  res.json({ status: 'OK', timestamp: new Date() , message: 'Server is healthy' });
});

// Basic POST route
app.post('/api/data', (req: Request, res: Response) => {
  const body = req.body;
  res.status(201).json({
    message: 'Data received successfully',
    receivedData: body,
  });
});



// Start the server
app.listen(PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${PORT}`);
});
