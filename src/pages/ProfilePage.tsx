import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonLabel,
  IonAvatar,
  IonText,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useParams } from "react-router-dom";

// Importamos el tipo Usuario desde el módulo LoginPage.tsx
import { Usuario, usuarios } from "./Usuario";
// Importamos el componente LogoutButton desde el archivo LogoutButton.tsx
import LogoutButton from "../components/LogoutButton";
// Importamos el componente Contacts desde el archivo Contacts.tsx
import Contacts from "../components/Contacts";

// Definimos el tipo de las props de ProfilePage (en este caso, no hay ninguna)
type ProfilePageProps = {};

// Definimos el tipo del estado de ProfilePage
type ProfilePageState = {
  usuario: Usuario | null; // El usuario puede ser nulo si no se ha encontrado
};

const ProfilePage = (props: ProfilePageProps) => {
  // Obtenemos el id de la ruta como un string
  const { id } = useParams<{ id: string }>();
  // Creamos el estado del usuario indicando su tipo
  const [usuario, setUsuario] = useState<ProfilePageState["usuario"]>(null);

  useEffect(() => {
    // Buscamos el usuario en el array según el id, que tenemos que convertir a número
    const usuarioEncontrado = usuarios[Number(id)];
    // Asignamos el usuario al estado
    setUsuario(usuarioEncontrado);
  }, [id]); // Ejecutamos el efecto cada vez que cambie el id

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {usuario && ( // Si el usuario existe, mostramos el contenido
          <IonCard>
            <IonCardHeader color="primary">
              <IonTitle className="ion-text-center" color="dark">
                {usuario.correo}
              </IonTitle>
            </IonCardHeader>

            <IonCardContent className="top-grid">
              <IonGrid>
                <IonRow>
                  <IonCol className="top-avatar">
                    <IonAvatar>
                      <img src={usuario.foto} alt={usuario.nombre} />
                    </IonAvatar>
                  </IonCol>
                  <IonCol className="top-name">
                    <IonLabel position="floating">{usuario.nombre}</IonLabel>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <IonLabel position="floating">Biografía: </IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText>{usuario.bio}</IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        )}

        <IonCard>
          <IonCardHeader color="light">
            <IonTitle className="ion-text-center">Contactos</IonTitle>
          </IonCardHeader>
          <IonCardContent className="ion-no-padding">
            <Contacts />
          </IonCardContent>
        </IonCard>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <LogoutButton />
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ProfilePage;
