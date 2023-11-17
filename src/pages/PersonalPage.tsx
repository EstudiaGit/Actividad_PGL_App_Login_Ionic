// Importamos los componentes necesarios de Ionic React y React Router
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
  IonButton,
} from "@ionic/react";
import { useParams, useHistory } from "react-router-dom";

// Importamos los tipos y constantes de Usuario
import { Usuario, USUARIOS_KEY } from "./Usuario";

// Importamos el componente LogoutButton
import LogoutButton from "../components/LogoutButton";

// Importamos el Storage de Ionic
import { Storage } from "@ionic/storage";

// Importamos el hook useIonViewWillEnter de Ionic
import { useIonViewWillEnter } from "@ionic/react";

// Importamos la clave USER_INDEX_KEY de LoginPage
import { USER_INDEX_KEY } from "./LoginPage";

// Definimos las props de la página Personal
type PersonalPageProps = {};

// Definimos el tipo ProfilePageState usando una interfaz
interface ProfilePageState {
  usuario: Usuario | null; // El usuario logueado
}

// Definimos el estado de la página Personal
type PersonalPageState = {
  usuario: Usuario | null; // El usuario logueado
};

// Creamos el componente de la página Personal
const PersonalPage = (props: PersonalPageProps) => {
  // Obtenemos el id del usuario de la ruta
  const { id } = useParams<{ id: string }>();

  // Creamos el estado del usuario usando el hook useState
  const [usuario, setUsuario] = useState<ProfilePageState["usuario"]>(null);

  // Creamos una variable para guardar la instancia del Storage
  const [storage, setStorage] = useState<Storage | null>(null);

  // Usamos el useHistory hook para acceder al historial de navegación
  const history = useHistory();

  // Usamos el hook useEffect para crear el Storage solo una vez cuando el componente se monta
  useEffect(() => {
    // Creamos una instancia del Storage y asignamos el driver que queremos usar (por ejemplo, localStorage)
    const storage = new Storage();
    // @ts-ignore
    storage.create({ driverOrder: ["localstorage"] }).then(() => {
      // Guardamos la instancia del Storage en el estado
      setStorage(storage);
    });
  }, []);

  // Usamos el hook useIonViewWillEnter para obtener y mostrar los datos del usuario cuando el componente se monta o cambia el id
  useIonViewWillEnter(() => {
    if (storage) {
      // Obtenemos el índice del usuario logueado del localStorage con la clave USER_INDEX_KEY
      storage.get(USER_INDEX_KEY).then((userIndex) => {
        // Comprobamos si el usuario está logueado y si el id de la ruta coincide con el índice del usuario logueado
        if (userIndex !== null && userIndex === Number(id)) {
          // Obtenemos el array de usuarios del localStorage usando el método get y la clave USUARIOS_KEY
          storage.get(USUARIOS_KEY).then((usuarios) => {
            // Obtenemos el usuario correspondiente al índice
            const usuarioEncontrado = usuarios[userIndex];
            // Asignamos el usuario al estado usando el hook useState
            setUsuario(usuarioEncontrado);
          });
        } else {
          // Si el usuario no está logueado o el id de la ruta no coincide, lo redirigimos a la página de inicio de sesión
          history.push("/login");
        }
      });
    }
  }, [id, storage]); // Ejecutamos el efecto cada vez que cambie el id o el storage

  // Creamos una función para volver a la página de perfil
  const goBack = () => {
    history.push(`/profile/${id}`);
  };

  // Retornamos el JSX de la página Personal
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Página personal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {usuario && (
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
                <IonRow>
                  <IonCol>
                    <IonLabel position="floating">Mi historia: </IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText>{usuario.myhistory}</IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
      <IonFooter>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton className="ion-float-right" onClick={goBack}>
                Volver
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

// Exportamos el componente de la página Personal
export default PersonalPage;
