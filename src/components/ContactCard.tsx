// ContactCard.tsx
import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonTitle,
  IonAvatar,
  IonText,
  IonCol,
  IonRow,
} from "@ionic/react";
import "../styles/profile_user_card.css";
import { Usuario } from "../pages/Usuario";

// Definimos el tipo de las props de ContactCard
type ContactCardProps = {
  contacto: Usuario; // El objeto de tipo Usuario que se pasará como prop
};

const ContactCard = (props: ContactCardProps) => {
  // Obtenemos el contacto del prop
  const { contacto } = props;
  // Devolvemos el marcado del IonCard usando los datos del contacto
  return (
    <IonCard>
      <IonCardHeader>
        <IonTitle className="ion-text-center">{contacto.nombre}</IonTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonRow>
          <IonCol>
            <IonAvatar>
              <img src={contacto.foto} alt={contacto.nombre} />
            </IonAvatar>
          </IonCol>
          <IonCol>
            <IonText className="ion-margin centered-text">
              {contacto.correo}
            </IonText>
          </IonCol>
        </IonRow>
      </IonCardContent>
    </IonCard>
  );
};

export default ContactCard;
