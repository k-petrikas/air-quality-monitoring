import mongoose from 'mongoose';

import {airQualitySchema} from '../models/airQualityModel';

const airQuality = mongoose.model('airQuality', airQualitySchema);

//endpoint used to populate mongo DB with air quality data
export const addNewAirQuality = (req,res) => {
    let newAirQuality = new airQuality(req.body);

    newAirQuality.save((err, newAirQuality) => {
        if(err){
            res.send(err);
        }
        res.json(newAirQuality);
    })
}

// gets all the air quality data
export const getAirQuality = (req,res) => {
    airQuality.find({}, (err,airQuality) =>{
        if(err){
            res.send(err);
        }
        res.json(airQuality);
    })

}

