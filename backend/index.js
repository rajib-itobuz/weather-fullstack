import express from 'express';
import { getWeatherData, addWeatherData } from './controller/getWeatherData.js';
import cors from 'cors';

const app = express();

const port = 3000;

app.use(cors());

app.use(express.json());
app.get("/weatherData", getWeatherData);
app.post("/addWeatherData", addWeatherData);


app.listen(port, () => {
    console.log(`Server Running at ${port}`);
});