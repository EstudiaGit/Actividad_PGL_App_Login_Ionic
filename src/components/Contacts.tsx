import React, { useState, useEffect } from "react";
import { IonCardContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import { Usuario, usuarios } from "../pages/Usuario";
// Importamos el componente ContactCard desde el archivo ContactCard.tsx
import ContactCard from "./ContactCard";
// Importamos el hook useParams desde react-router-dom
import { useParams } from "react-router-dom";
import "./Contacts.scss";

// Definimos el tipo de las props de Contacts (en este caso, no hay ninguna)
type ContactsProps = {};

const Contacts = (props: ContactsProps) => {
  // Creamos el estado de los contactos usando el hook useState
  const [contactos, setContactos] = useState<Usuario[]>([]);
  // Obtenemos el correo de la ruta como un string usando el hook useParams
  const { correo } = useParams<{ correo: string }>();
  // Usamos el hook useEffect para obtener y filtrar el array de usuarios cuando el componente se monta o cambia el correo
  useEffect(() => {
    // Obtenemos el índice del usuario logueado usando el método findIndex
    const indice = usuarios.findIndex((user) => user.correo === correo);
    // Si el índice es mayor que 0, movemos el usuario logueado al principio del array usando el método splice
    if (indice > 0) {
      const usuarioLogueado = usuarios.splice(indice, 1);
      usuarios.splice(0, 0, ...usuarioLogueado);
    }
    // Asignamos el array modificado al estado usando el hook useState
    setContactos(usuarios);
  }, [correo]); // Ejecutamos el efecto cada vez que cambie el correo

  // Devolvemos el marcado del componente usando el estado de los contactos
  return (
    <IonGrid className="top-grid ">
      {contactos.slice(1).map((contacto, index) => (
        <IonCol size="12" key={index} className="ion-no-padding">
          <ContactCard contacto={contacto} />
        </IonCol>
      ))}
    </IonGrid>
  );
};

export default Contacts;
