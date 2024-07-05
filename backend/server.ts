import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// CREATING OUR INSTANCE OF OUR EXPRESS SERVER
const app = express();
const PORT = process.env.PORT || 5001;

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json()); // Add this line to parse JSON bodie

// API ROUTES
app.get('/api/hello', (req: Request, res: Response) => {
  console.log('Received request for /api/hello');
  res.json({ message: 'Hello from the poopy!' });
});

app.get('/api/message', (req: Request, res: Response) => {
  console.log('Received request for /api/message');
  res.json({ message: 'This is a test message from the poopy!' });
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// Handles any requests that don't match the ones aboves
app.get('*', (req: Request, res: Response) => {
  if (req.originalUrl.startsWith('/api')) {
    console.log(`API route not found: ${req.originalUrl}`);
    return res.status(404).json({ error: 'Not found' });
  }
  console.log(`Serving the file for URL: ${req.originalUrl}`);
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// CONFIGURE EXPRESS GLOBAL ERROR HANDLER
app.use(
  (error: any, request: Request, response: Response, next: NextFunction) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign(defaultErr, { error });
    response.status(errorObj.status).json(errorObj.message.err);
  }
);

// START SERVER
app.listen(PORT, () => {
  console.log(`The server is connected and running on port: ${PORT}`);
});

///////////////////////////

// import express, { Request, Response, NextFunction } from "express";
// import cors from "cors";
// import path from 'path';
// import { fileURLToPath } from 'url';

// // CREATING OUR INSTANCE OF OUR EXPRESS SERVER
// const app = express();
// const PORT = process.env.PORT || 5001;

// // Get __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(cors());
// app.use(express.json()); // Add this line to parse JSON bodies

// // API ROUTES
// app.get('/api/hello', (req: Request, res: Response) => {
//     console.log('Received request for /api/hello');
//     res.json({ message: 'Hello from the heroku!' });
// });

// app.get('/api/message', (req: Request, res: Response) => {
//     console.log('Received request for /api/message');
//     res.json({ message: 'This is a test message from the heroku!' });
// });

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, '../build')));

// // Handles any requests that don't match the ones aboves
// app.get('*', (req: Request, res: Response) => {
//     if (req.originalUrl.startsWith('/api')) {
//         console.log(`API route not found: ${req.originalUrl}`);
//         return res.status(404).json({ error: 'Not found' });
//     }
//     console.log(`Serving the file for URL: ${req.originalUrl}`);
//     res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

// // CONFIGURE EXPRESS GLOBAL ERROR HANDLER
// app.use((error: any, request: Request, response: Response, next: NextFunction) => {
//     const defaultErr = {
//         log: 'Express error handler caught unknown middleware error',
//         status: 400,
//         message: { err: 'An error occurred' }
//     };
//     const errorObj = Object.assign(defaultErr, { error });
//     response.status(errorObj.status).json(errorObj.message.err);
// });

// // START SERVER
// app.listen(PORT, () => {
//     console.log(`The server is connected and running on port: ${PORT}`);
// });
