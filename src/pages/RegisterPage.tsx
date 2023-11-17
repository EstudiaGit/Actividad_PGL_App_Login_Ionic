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
  IonToast,
  IonAvatar,
  IonFooter,
  IonGrid,
  IonCol,
  IonIcon,
} from "@ionic/react";
import { Tooltip } from "react-tooltip";
// Importamos el hook useHistory de react-router
import { personAdd, logIn } from "ionicons/icons";
import { useHistory } from "react-router";
// Importamos el hook useForm de react-hook-form
import { useForm, Controller } from "react-hook-form";
import { Storage } from "@ionic/storage";

// Importamos el tipo Usuario y la constante USUARIOS_KEY del componente Usuarios.tsx
import { Usuario, USUARIOS_KEY } from "./Usuario";

// Creamos una constante para guardar la clave del índice del usuario logueado
const USER_INDEX_KEY = "userIndex";

const RegisterPage: React.FC = () => {
  // Creamos una variable history usando el hook useHistory
  const history = useHistory();

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

  // Creamos una variable para guardar el mensaje de éxito o error
  const [mensaje, setMensaje] = useState<string>("");

  // Creamos una variable para guardar el número de la foto que se va a generar aleatoriamente
  const [numFoto, setNumFoto] = useState<number>(
    Math.floor(Math.random() * 20) + 1
  );

  // Usamos el hook useForm para manejar el estado y la validación de los campos del formulario
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Usuario>();

  const registrarUsuario = (usuario: Usuario) => {
    if (storage) {
      console.log("2_Registro logrado.");
      // Usamos el método get para obtener los datos de los usuarios del localStorage con la clave USUARIOS_KEY
      storage.get(USUARIOS_KEY).then((usuarios) => {
        // Usamos el método some para comprobar si existe un usuario con el mismo correo electrónico
        const existeUsuario = usuarios.some(
          (u: Usuario) => u.correo === usuario.correo
        );
        if (existeUsuario) {
          setMensaje("Ya existe un usuario con ese correo electrónico");
          return;
        }
        // Asignamos la foto y la bio al usuario
        usuario.foto = `https://i.pravatar.cc/150?img=${numFoto}`;
        usuario.bio =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
        // Usamos el método push para añadir el usuario al final del array de usuarios
        usuarios.push(usuario);
        // Usamos el método length para obtener el índice del usuario recién registrado
        const userIndex = usuarios.length - 1;
        // Guardamos el array de usuarios en el localStorage con la clave USUARIOS_KEY
        storage.set(USUARIOS_KEY, usuarios);
        // Guardamos el índice del usuario logueado en el localStorage con la clave USER_INDEX_KEY
        storage.set(USER_INDEX_KEY, userIndex);
        setMensaje("Usuario registrado con éxito");
        setTimeout(() => {
          // Navegamos al perfil del usuario usando el índice
          history.push(`/profile/${userIndex}`);
        }, 1000);
      });
    }
  };
  //console.log(localStorage.getItem(USUARIOS_KEY));

  const goToLogin = () => {
    history.push("/login");
  };
  const goToHome = () => {
    history.push("/home");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">
            <h1>Registro</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="translucido">
          <IonCardContent>
            <IonAvatar
              id="avatar-trigger"
              className="ion-margin-bottom ion-align-self-center"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Esta foto de perfil se añade automatica, por ahora."
            >
              <img
                src={`https://i.pravatar.cc/150?img=${numFoto}`}
                alt="Foto del usuario"
              />
            </IonAvatar>
            <Tooltip id="my-tooltip" place="right" />
            <form onSubmit={handleSubmit(registrarUsuario)}>
              <Controller
                name="correo"
                control={control}
                rules={{ required: "El correo electrónico es obligatorio" }}
                render={({ field }) => (
                  <IonInput
                    type="email"
                    label="Correo electrónico"
                    labelPlacement="floating"
                    errorText={errors.correo?.message}
                    {...field}
                  ></IonInput>
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{ required: "La contraseña es obligatoria" }}
                render={({ field }) => (
                  <IonInput
                    type="password"
                    label="Contraseña"
                    labelPlacement="floating"
                    errorText={errors.password?.message}
                    {...field}
                  ></IonInput>
                )}
              />
              <Controller
                name="nombre"
                control={control}
                rules={{ required: "El nombre es obligatorio" }}
                render={({ field }) => (
                  <IonInput
                    type="text"
                    label="Nombre"
                    labelPlacement="floating"
                    errorText={errors.nombre?.message}
                    {...field}
                  ></IonInput>
                )}
              />

              <IonButton
                expand="full"
                type="submit"
                onClick={handleSubmit(registrarUsuario)}
              >
                Registrarse
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
        <IonToast
          isOpen={!!mensaje}
          message={mensaje}
          duration={2000}
          onDidDismiss={() => setMensaje("")}
        />
      </IonContent>
      <IonFooter>
        <IonGrid className="ion-text-center">
          <IonCol>
            <IonButton color="primary" onClick={goToLogin}>
              <IonIcon slot="start" icon={logIn} />
              Login
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton color="secondary" onClick={goToHome}>
              <IonIcon slot="start" icon={personAdd} />
              Home
            </IonButton>
          </IonCol>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};
export default RegisterPage;
