import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  IonAvatar,
  IonFooter,
  IonGrid,
  IonTitle,
} from "@ionic/react";
import { personAdd, logIn } from "ionicons/icons";
// Importamos el useHistory hook de react-router-dom
import { useHistory } from "react-router-dom";

import "../styles/home_bg.css";

// Definimos el componente de la página de bienvenida
const HomePage = () => {
  // Usamos el useHistory hook para acceder al historial de navegación
  const history = useHistory();
  // Definimos una función para navegar a la página de inicio de sesión
  const goToLogin = () => {
    // Navegamos a la ruta /login

    history.push("/login");
  };

  // Definimos una función para navegar a la página de registro de usuario
  const goToRegister = () => {
    // Navegamos a la ruta /register

    history.push("/register");
  };

  // Retornamos el JSX de la página de bienvenida
  return (
    <IonPage className="background">
      <IonHeader>
        <IonGrid>
          <IonRow>
            <IonAvatar>
              <img src="./img/logo.png" alt="Logo de la aplicación" />
            </IonAvatar>
            <IonCol>
              <IonTitle>
                <h1>Mi aplicación</h1>
              </IonTitle>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid className="translucido">
          <IonTitle className="ion-text-center">
            <h4>Actividad de Sesiones</h4>
            <h5>para PGL</h5>
          </IonTitle>
        </IonGrid>
      </IonContent>
      {/* */}
      <IonFooter>
        {/* <IonGrid className="ion-text-center"> */}

        <IonButton expand="full" color="primary" onClick={goToLogin}>
          <IonIcon slot="start" icon={logIn} />
          Iniciar sesión
        </IonButton>

        <IonButton expand="full" color="secondary" onClick={goToRegister}>
          <IonIcon slot="start" icon={personAdd} />
          Registrarse
        </IonButton>

        {/* </IonGrid> */}
      </IonFooter>
    </IonPage>
  );
};

export default HomePage;
