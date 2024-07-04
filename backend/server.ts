import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

// CREATING OUR INSTANCE OF OUR EXPRESS SERVER
const app = express();
const PORT = process.env.PORT || 5001;

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json()); // Add this line to parse JSON bodies

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// GET ROUTE
app.get('/test', async (req: Request, res: Response) => {
    console.log("HOLA TURKEY hello");
    res.send("HOLA TURKEY punk sdf");
});

// An example API endpoint
app.get('/api/hello', (req: Request, res: Response) => {
    res.send({ message: 'Hello from the server!' });
});

// Handles any requests that don't match the ones above
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// CATCH-ALL ROUTE HANDLER FOR ANY REQUESTS TO AN UNKNOWN ROUTE
app.use('*', (request: Request, response: Response) => {
    response.status(404).send('Error: Page not found for shizzle');
});

// CONFIGURE EXPRESS GLOBAL ERROR HANDLERs
app.use((error: any, request: Request, response: Response, next: NextFunction) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' }
    };
    const errorObj = Object.assign(defaultErr, { error });
    response.status(errorObj.status).json(errorObj.message.err);
});

// START SERVER
app.listen(PORT, () => {
    console.log(`The server is connected and running on port: ${PORT}`);
});
