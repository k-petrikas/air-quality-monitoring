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
        .get(loginRequired, getAirQuality);


    app.route('/auth/register')
        .post(register)

    app.route('/login')
        .post(login)
}

export default routes;