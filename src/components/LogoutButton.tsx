import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { logOut } from "ionicons/icons";

const LogoutButton = () => {
  // Definimos la función que cierra la sesión del usuario
  const handleLogout = () => {
    // Implementar la lógica para cerrar la sesión
    // P.E: se puede borrar el token de autenticación del localStorage
    localStorage.removeItem("authToken");
    // Luego, se puede redirigir al usuario a la página de inicio de sesión
    window.location.href = "/home";
  };

  return (
    // Renderizamos el botón con el texto "Salir" y el manejador del evento onClick
    <IonButton color="primary" expand="full" onClick={handleLogout}>
      <IonIcon slot="start" icon={logOut} />
      Salir
    </IonButton>
  );
};

export default LogoutButton;
