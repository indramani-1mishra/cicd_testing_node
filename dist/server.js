import express from 'express';
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON request bodies
app.use(express.json());
// Basic GET route
app.get('/', (req, res) => {
    res.send('Welcome to your TypeScript Express Server!');
});
// Basic API GET route returning JSON
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});
// Basic POST route
app.post('/api/data', (req, res) => {
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
//# sourceMappingURL=server.js.map