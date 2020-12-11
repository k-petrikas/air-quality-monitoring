import {
    addNewAirQuality,
    getAirQuality
} from '../controllers/airQualityMonitoringControler'
import {login,register,loginRequired} from '../controllers/userControllers'


const routes = (app) => {

    app.route('/airQuality')

        //POST
        .post(addNewAirQuality)
        
        //GET endpoint
        .get(getAirQuality);


}

export default routes;