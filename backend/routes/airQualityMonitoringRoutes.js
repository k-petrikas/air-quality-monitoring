


const routes = (app) => {

    app.route('/airQuality')

    //GET endpoint
    .get(getAirQuality);
}
 
export default routes;