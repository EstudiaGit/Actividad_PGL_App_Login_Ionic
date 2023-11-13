import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
//import RegisterPage from "./pages/RegisterPage"; // Importar el componente RegisterPage

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Rutas existentes */}
        <Route exact path="/home">
          {/* Componente Home */}
          <HomePage />
        </Route>

        {/* Ruta para la página de inicio de sesión */}
        <Route exact path="/login">
          <LoginPage />
        </Route>

        {/* Ruta para la página de perfil con el correo como parámetro */}
        <Route exact path="/profile/:id">
          <ProfilePage />
        </Route>

        {/* Ruta para la página de registro */}

        {/* <Route exact path="/register">
          <RegisterPage />
        </Route> */}

        {/* Redirección por defecto a /login */}
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
