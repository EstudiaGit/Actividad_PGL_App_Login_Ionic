import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToast,
} from "@ionic/react";
import { useHistory } from "react-router";
import { Usuario, usuarios } from "./Usuario";

const RegisterPage: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    correo: "",
    password: "",
    nombre: "",
    foto: "",
    bio: "",
  });

  const [mensaje, setMensaje] = useState<string>("");

  const history = useHistory();

  const registrarUsuario = () => {
    // Validar que los campos correo, password y nombre no estén vacíos
    if (!usuario.correo || !usuario.password || !usuario.nombre) {
      setMensaje("Por favor, rellena todos los campos obligatorios");
      return;
    }

    // Comprobar que no exista ya un usuario con el mismo correo
    const existeUsuario = usuarios.find((u) => u.correo === usuario.correo);
    if (existeUsuario) {
      setMensaje("Ya existe un usuario con ese correo electrónico");
      return;
    }

    // Generar un número aleatorio entre 1 y 20 para la foto
    const numFoto = Math.floor(Math.random() * 20) + 1;

    // Asignar la foto y la bio al usuario
    usuario.foto = `https://i.pravatar.cc/150?img=${numFoto}`;
    usuario.bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    // Añadir el usuario al array de usuarios
    usuarios.push(usuario);

    // Mostrar un mensaje de éxito
    setMensaje("Usuario registrado con éxito");

    // Redirigir al usuario a la página de inicio de sesión
    setTimeout(() => {
      history.push("/login");
    }, 2000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Correo electrónico</IonLabel>
          <IonInput
            type="email"
            value={usuario.correo}
            onIonChange={(e) =>
              setUsuario({ ...usuario, correo: e.detail.value! })
            }
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Contraseña</IonLabel>
          <IonInput
            type="password"
            value={usuario.password}
            onIonChange={(e) =>
              setUsuario({ ...usuario, password: e.detail.value! })
            }
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Nombre</IonLabel>
          <IonInput
            type="text"
            value={usuario.nombre}
            onIonChange={(e) =>
              setUsuario({ ...usuario, nombre: e.detail.value! })
            }
          ></IonInput>
        </IonItem>
        <IonButton expand="block" onClick={registrarUsuario}>
          Registrarse
        </IonButton>
        <IonToast
          isOpen={!!mensaje}
          message={mensaje}
          duration={2000}
          onDidDismiss={() => setMensaje("")}
        />
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
