import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/airQualityMonitoringRoutes'
import jsonwebtoken from 'jsonwebtoken'


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

//JWT setup
app.use((req, res, next) => {
    if (req.header && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err,decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        })    
    } else {
        req.user = undefined;
        next();
    }
})


//CORS setup
app.use(cors());


app.get('/', (req, res) =>
    res.send(`Our Air Quality Monitoring application is running on port: ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your Air Quality Monitoring server is running on port ${PORT}`)
);

routes(app);
