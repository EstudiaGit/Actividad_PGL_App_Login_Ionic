import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonLabel,
  IonInput,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCardContent,
  IonCard,
  IonCardHeader,
  useIonViewWillEnter,
} from "@ionic/react";
// Importamos el hook useHistory de react-router-dom
import { useHistory } from "react-router-dom";
import { Storage } from "@ionic/storage";

// Importamos el tipo Usuario y la constante USUARIOS_KEY del componente Usuarios.tsx
import { Usuario, USUARIOS_KEY } from "./Usuario";

// Creamos una constante para guardar la clave del índice del usuario logueado
export const USER_INDEX_KEY = "userIndex";

const LoginPage = () => {
  // Creamos una variable history usando el hook useHistory
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Creamos una variable para guardar la instancia del Storage
  const [storage, setStorage] = useState<Storage | null>(null);

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

  // Usamos el hook useIonViewWillEnter para comprobar si el usuario ya está logueado y redirigirlo al perfil correspondiente
  useIonViewWillEnter(() => {
    if (storage) {
      // Obtenemos el índice del usuario logueado del localStorage con la clave USER_INDEX_KEY
      storage.get(USER_INDEX_KEY).then((userIndex) => {
        if (userIndex !== null) {
          // Navegamos al perfil del usuario usando el índice
          history.push(`/profile/${userIndex}`);
        }
      });
    }
  });

  const handleLogin = () => {
    console.log("Email ingresado:", email);
    console.log("Contraseña ingresada:", password);

    if (storage) {
      // Usamos el método get para obtener los datos de los usuarios del localStorage con la clave USUARIOS_KEY
      storage.get(USUARIOS_KEY).then((usuarios) => {
        // Buscamos el usuario que coincide con el correo y la contraseña introducidos por el usuario
        const usuarioEncontrado = usuarios.find(
          (user: Usuario) => user.correo === email && user.password === password
        );

        console.log("Usuario encontrado:", usuarioEncontrado);

        if (usuarioEncontrado) {
          console.log("¡Inicio de sesión exitoso!");
          // Guardamos el índice del usuario logueado en el localStorage con la clave USER_INDEX_KEY
          storage.set(USER_INDEX_KEY, usuarios.indexOf(usuarioEncontrado));
          // Navegamos a la página de perfil usando el índice del usuario encontrado
          history.push(`/profile/${usuarios.indexOf(usuarioEncontrado)}`);
        } else {
          console.log("Correo o contraseña incorrectos");
          // ...
        }
      });
    }
  };

  const handleRegistro = () => {
    console.log("¡Redirigir a la página de registro!");
    // Navegar a la ruta '/register' usando el objeto history
    history.push("/register");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio de Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard className="translucido">
          <IonCardHeader>
            <IonTitle className="ion-text-center">Login</IonTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonLabel position="floating">Usuario</IonLabel>
            <IonInput
              type="email"
              placeholder="usuario1@email.com"
              value={email}
              onIonInput={(e) => setEmail(e.detail.value!)}
            ></IonInput>

            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              placeholder="clave1"
              value={password}
              onIonInput={(e) => setPassword(e.detail.value!)}
            ></IonInput>

            <IonButton expand="full" onClick={handleLogin}>
              Iniciar Sesión
            </IonButton>
            <IonButton expand="full" onClick={handleRegistro}>
              Registro
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
