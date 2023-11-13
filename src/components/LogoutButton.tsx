import React from "react";
import { IonButton } from "@ionic/react";

const LogoutButton = () => {
  // Definimos la función que cierra la sesión del usuario
  const handleLogout = () => {
    // Implementar la lógica para cerrar la sesión
    // P.E: se puede borrar el token de autenticación del localStorage
    localStorage.removeItem("authToken");
    // Luego, se puede redirigir al usuario a la página de inicio de sesión
    window.location.href = "/login";
  };

  return (
    // Renderizamos el botón con el texto "Salir" y el manejador del evento onClick
    <IonButton color="medium" expand="full" onClick={handleLogout}>
      Salir
    </IonButton>
  );
};

export default LogoutButton;
