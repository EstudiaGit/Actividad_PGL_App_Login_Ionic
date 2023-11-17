import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import PersonalPage from "./pages/PersonalPage";

/* CSS basicos requeridos por Ionic para correcto funcionamiento */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* CSS Opcionales */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

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
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        {/* Ruta para la página de registro */}
        <Route path="/personal/:id" component={PersonalPage}>
          <PersonalPage />
        </Route>

        {/* Redirección por defecto a /login */}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
