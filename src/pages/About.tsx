import { IonContent, IonHeader, IonMenu, IonPage, IonRoute, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import './Template.css';
import React from 'react';      
import Login from '../components/Login';
import Home from './Home';
import { Redirect, Route } from 'react-router';


 const About: React.FC = () => {
  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          {/* Menu content */}
          <IonHeader>
            <IonToolbar>
              <IonTitle>About</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonMenu>

        <IonRouterOutlet id="main">

            <Route exact path="/app/home" component={Home} />
            <Route exact path="/app">
            <Redirect to="/app/home" />
            </Route>


        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  )
}
export default About;