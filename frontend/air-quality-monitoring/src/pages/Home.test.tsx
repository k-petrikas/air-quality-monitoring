import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

import axios from 'axios';


test('page should have a title of Air Quality Monitoring', async () => {
    const { findByText } = render(<Home />);
    await findByText('Air Quality Monitoring');
});



const airQuality: any[] = [
    {
        "_id": "5fc3e857f6ecf061f0f2abb1",
        "countryName": "United States",
        "countryISOCode": "us",
        "airQualityRanking": 40,
        "airQualityValue": 500,
        "countryPopulation": 330000000,
        "__v": 0
    },
    {
        "_id": "5fc3e8a5f6ecf061f0f2abb2",
        "countryName": "United Kingdom",
        "countryISOCode": "gb",
        "airQualityRanking": 30,
        "airQualityValue": 400,
        "countryPopulation": 66000000,
        "__v": 0
    }
];


//FIXME: implement mock axios test
// Mock axios
// jest.mock('axios', () => {
//     return jest.fn().mockResolvedValue(() => {
//         return {
//             // Inject a function named `get`
//             get: new Response(JSON.stringify(airQuality))
//         };
//     });
// });


