# air-quality-monitoring

## Quick start
Clone the source:
`git clone https://github.com/k-petrikas/air-quality-monitoring`

import mongo DB collections:    
`airQualityDB.json`     
`usersDB.json`    
import instructions can be found here: https://docs.mongodb.com/compass/master/import-export#export-data-from-a-collection


## back end startup:
- ensure you have an instance of mongo db up and running
- start terminal in /backend
- install dependencies
`npm install`
- run code: 
`npm start`



## front end startup
- install dependencies:
`npm install`
- to run application make sure you are in dir /frontend/air-quality-monitoring
- run code:
`ionic serve`

## Android app startup
- navigate into /frontend/air-quality-monitoring
- build the latest version of the app `ionic build`
- run `ionic capacitor run android --livereload` to open app in android studio
- run android app in stuido 

