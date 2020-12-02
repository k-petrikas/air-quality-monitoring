import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/airQualityMonitoringRoutes'


const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/airQualityDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyParser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


//CORS setup
app.use(cors());


app.get('/', (req, res) =>
    res.send(`Our Air Quality Monitoring application is running on port: ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your Air Quality Monitoring server is running on port ${PORT}`)
);

routes(app);
