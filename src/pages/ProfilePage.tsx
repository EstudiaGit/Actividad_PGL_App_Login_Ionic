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
  IonIcon,
} from "@ionic/react";
import { body } from "ionicons/icons";
import { useParams, useHistory } from "react-router-dom";
import { Usuario, USUARIOS_KEY } from "./Usuario";
import LogoutButton from "../components/LogoutButton";
import Contacts from "../components/Contacts";
import { Storage } from "@ionic/storage";
import { useIonViewWillEnter } from "@ionic/react";
import { USER_INDEX_KEY } from "./LoginPage";
import "../styles/profile_user_card.css";

type ProfilePageProps = {};
type ProfilePageState = {
  usuario: Usuario | null;
};
const ProfilePage = (props: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const [usuario, setUsuario] = useState<ProfilePageState["usuario"]>(null);
  // Creamos una variable para guardar la instancia del Storage
  const [storage, setStorage] = useState<Storage | null>(null);
  // Usamos el useHistory hook para acceder al historial de navegación
  const history = useHistory();
  const handlePersonal = () => {
    console.log("¡Redirigir a la página de personal!");
    // Navegar a la ruta '/register' usando el objeto history
    history.push(`/personal/${id}`);
  };
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
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {usuario && (
          <IonCard>
            <IonCardHeader color="primary">
              <IonTitle size="small" className="ion-text-center" color="dark">
                {usuario.nombre}
              </IonTitle>
            </IonCardHeader>
            <IonCardContent className="top-grid">
              <IonGrid>
                <IonRow>
                  <IonCol size="2" className="top-avatar">
                    <IonAvatar>
                      <img src={usuario.foto} alt={usuario.nombre} />
                    </IonAvatar>
                  </IonCol>
                  <IonCol className="custom-highlight">
                    <IonLabel position="floating">{usuario.correo}</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel position="floating">Biografía: </IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText>
                      Soy, {usuario.nombre}. {usuario.bio}
                    </IonText>
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
        <IonGrid>
          <IonRow>
            <IonCol>
              <LogoutButton />
            </IonCol>
            <IonCol>
              <IonButton color="primary" expand="full" onClick={handlePersonal}>
                <IonIcon slot="start" icon={body} />
                Personal
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default ProfilePage;
