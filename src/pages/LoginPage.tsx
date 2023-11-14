import React, { useState } from "react";
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
} from "@ionic/react";
// Importamos el hook useHistory de react-router-dom
import { useHistory } from "react-router-dom";
import { usuarios } from "./Usuario";

const LoginPage = () => {
  // Creamos una variable history usando el hook useHistory
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email ingresado:", email);
    console.log("Contraseña ingresada:", password);

    const usuarioEncontrado = usuarios.find(
      (user) => user.correo === email && user.password === password
    );

    console.log("Usuario encontrado:", usuarioEncontrado);

    if (usuarioEncontrado) {
      console.log("¡Inicio de sesión exitoso!");
      // Navegar a la página de perfil usando el índice del usuario encontrado
      history.push(`/profile/${usuarios.indexOf(usuarioEncontrado)}`);
    } else {
      console.log("Correo o contraseña incorrectos");
      // ...
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
        <IonCard>
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
