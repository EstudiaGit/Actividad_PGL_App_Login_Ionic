// Definimos y exportamos el tipo Usuario con las propiedades correo y password
export type Usuario = {
  correo: string;
  password: string;
  nombre: string;
  foto: string;
  bio: string;
};

// Array de usaurios para el ejercicio
export const usuarios: Usuario[] = [
  {
    correo: "usuario1@email.com",
    password: "clave1",
    nombre: "NombreUsuario Uno",
    foto: "https://i.pravatar.cc/150?img=1",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    correo: "usuario2@email.com",
    password: "clave2",
    nombre: "NombreUsuario Dos",
    foto: "https://i.pravatar.cc/150?img=2",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    correo: "usuario3@email.com",
    password: "clave3",
    nombre: "NombreUsuario Tres",
    foto: "https://i.pravatar.cc/150?img=3",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    correo: "usuario4@email.com",
    password: "clave4",
    nombre: "NombreUsuario Cuatro",
    foto: "https://i.pravatar.cc/150?img=4",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    correo: "usuario5@email.com",
    password: "clave5",
    nombre: "NombreUsuario Cinco",
    foto: "https://i.pravatar.cc/150?img=5",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    correo: "usuario6@email.com",
    password: "clave6",
    nombre: "NombreUsuario Seis",
    foto: "https://i.pravatar.cc/150?img=6",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    correo: "usuario7@email.com",
    password: "clave7",
    nombre: "NombreUsuario Siete",
    foto: "https://i.pravatar.cc/150?img=7",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    correo: "usuario8@email.com",
    password: "clave8",
    nombre: "NombreUsuario Ocho",
    foto: "https://i.pravatar.cc/150?img=8",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
