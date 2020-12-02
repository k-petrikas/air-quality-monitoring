import { IonAvatar, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
import './flag-icon.css';


const Home: React.FC = () => {

  //dummy list of items 
  var airQuality =
    [
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
      ,
      {
        "_id": "5fc3e8a5f6ecf061f0f2abb2",
        "countryName": "United Kingdom",
        "countryISOCode": "gb",
        "airQualityRanking": 30,
        "airQualityValue": 400,
        "countryPopulation": 66000000,
        "__v": 0
      }
      ,
      {
        "_id": "5fc3e8a5f6ecf061f0f2abb2",
        "countryName": "United Kingdom",
        "countryISOCode": "gb",
        "airQualityRanking": 30,
        "airQualityValue": 400,
        "countryPopulation": 66000000,
        "__v": 0
      }
      ,
      {
        "_id": "5fc3e8a5f6ecf061f0f2abb2",
        "countryName": "United Kingdom",
        "countryISOCode": "gb",
        "airQualityRanking": 30,
        "airQualityValue": 400,
        "countryPopulation": 66000000,
        "__v": 0
      }
      ,
      {
        "_id": "5fc3e8a5f6ecf061f0f2abb2",
        "countryName": "United Kingdom",
        "countryISOCode": "gb",
        "airQualityRanking": 30,
        "airQualityValue": 400,
        "countryPopulation": 66000000,
        "__v": 0
      }
      ,
      {
        "_id": "5fc3e8a5f6ecf061f0f2abb2",
        "countryName": "United Kingdom",
        "countryISOCode": "gb",
        "airQualityRanking": 30,
        "airQualityValue": 400,
        "countryPopulation": 66000000,
        "__v": 0
      }
      ,
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



  async function fetchData() {
    console.log("fetching data")

  }


  async function searchNext($event: CustomEvent<void>) {
    await fetchData();

    ($event.target as HTMLIonInfiniteScrollElement).complete();
  }

  var airQualityItem = null;

  //used to loop through the air quality data returned from mongo DB
  airQualityItem = airQuality.map((country) => {
    return (
      <IonItem>
        <IonAvatar className={`flag-icon flag-icon-${country.countryISOCode}`}></IonAvatar>
        <IonLabel>{country.countryName}</IonLabel>
        <IonText >
          <p>Population: {country.countryPopulation} |</p>

        </IonText>
        <IonText >
          <p>{country.airQualityRanking} |</p>

        </IonText>
        <IonText >
          <p>{country.airQualityValue} |</p>

        </IonText>
        <IonText >
          <p>{country.airQualityValue} </p>

        </IonText>
      </IonItem>);
  })


  return (
    <IonPage >
      
      <IonHeader translucent>
        <IonToolbar >
          <IonTitle class="ion-text-center">Air Quality Monitoring</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >

        <IonList id="list">
          {airQualityItem}
        </IonList>
        <IonInfiniteScroll id="infinite-scroll" threshold="100px" onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}>
          <IonInfiniteScrollContent
            loading-spinner="bubbles"
            loading-text="Loading more data...">
          </IonInfiniteScrollContent>

        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Home;



