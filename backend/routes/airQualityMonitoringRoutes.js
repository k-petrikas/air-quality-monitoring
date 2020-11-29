import {
    addNewAirQuality,
    getAirQuality
} from '../controllers/airQualityMonitoringControler'


const routes = (app) => {

    app.route('/airQuality')

        //POST
        .post(addNewAirQuality)
        
        //GET endpoint
        .get(getAirQuality);
}

export default routes;