import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';
import './flag-icon.css';
import axios from 'axios';
import { properties } from '../properties.js';


const Home: React.FC = () => {


  const [items, setItems] = useState<any[]>([]);

  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState<boolean>(false);

  const [displayAnyErrors, setErrors] = useState<any>();


  //get data from mongo db
  async function fetchData() {
    const url: string = properties.airQualityAPI;
    const apiToken: string = properties.airQualityToken

    axios.get(url, { headers: { 'Authorization': apiToken} })
      .then((Response) => {
        //TODO: may want to implement a if block here to see if data is reached its end
        // console.log(Response.data)
        setItems([...items, ...Response.data]);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          // device was not authorized to hit api
          setErrors(<p>Device is not autorized to recive Air Quality Infomation</p>);
        }
        console.log(error);
        setDisableInfiniteScroll(true);



      })


  }

  async function searchNext($event: CustomEvent<void>) {
    await fetchData();

    ($event.target as HTMLIonInfiniteScrollElement).complete();
  }

  useIonViewWillEnter(async () => {
    await fetchData();
  });

  //set innital sate of air quality
  var airQualityItem = null;

  //used to loop through the air quality data returned from mongo DB
  airQualityItem = items.map((country, i) => {
    return (
      <IonItem key={`${i}`}>
        <IonImg slot="start" className={`flag-icon flag-icon-${country.countryISOCode}`}></IonImg>
        <IonLabel>
          <h2>{country.countryName}</h2>
          <p>Air Quality: {country.airQualityValue}</p>
          <p>Population: {country.countryPopulation.toLocaleString()}</p>
          <p>Ranking: {country.airQualityRanking}</p>
        </IonLabel>
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
        <IonGrid>
          <IonRow >
            <IonCol >
              {displayAnyErrors}
              <IonList id="list" class="ion-padding" >
                {airQualityItem}
              </IonList>
              <IonInfiniteScroll id="infinite-scroll" threshold="100px" disabled={disableInfiniteScroll}
                onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}>
                <IonInfiniteScrollContent
                  loading-spinner="bubbles"
                  loading-text="Loading more data...">
                </IonInfiniteScrollContent>

              </IonInfiniteScroll>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;



