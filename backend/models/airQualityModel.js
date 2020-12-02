import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const airQualitySchema = new Schema({
    countryName: {
        type: String,
        required: true
    },
    countryISOCode: {
        type: String,
        required: true
    },
    airQualityRanking: {
        type: Number,
        required: true
    },
    airQualityValue: {
        type: Number,
        required: true
    },
    countryPopulation: {
        type: Number,
        required: true
    },
});