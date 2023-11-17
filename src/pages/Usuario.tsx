// Importamos el Storage de @ionic/storage
import { Storage } from "@ionic/storage";

// Definimos y exportamos el Usuario
export type Usuario = {
  correo: string;
  password: string;
  nombre: string;
  foto: string;
  bio: string;
  myhistory: string;
};
// Creamos una constante para guardar la clave del localStorage
export const USUARIOS_KEY = "usuarios";

// Creamos una instancia del Storage y asignamos el driver que queremos usar (por ejemplo, localStorage)
const storage = new Storage();

// Usamos el método then para esperar a que el Storage esté listo y luego guardar los datos de los usuarios en el localStorage con una clave (por ejemplo, 'usuarios')
// @ts-ignore
storage.create({ driverOrder: ["localstorage"] }).then(() => {
  storage.set(USUARIOS_KEY, [
    {
      correo: "usuario1@email.com",
      password: "clave1",
      nombre: "NombreUsuario Uno",
      foto: "https://i.pravatar.cc/150?img=1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      myhistory:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.Mauris placerat eleifend leo.Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.Nullam accumsan lorem in dui.Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia CuraeMorbi mattis ullamcorper velit. usce consequat arcu quis ante.",
    },
    {
      correo: "usuario2@email.com",
      password: "clave2",
      nombre: "NombreUsuario Dos",
      foto: "https://i.pravatar.cc/150?img=2",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      myhistory:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.Mauris placerat eleifend leo.Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.Nullam accumsan lorem in dui.Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia CuraeMorbi mattis ullamcorper velit. usce consequat arcu quis ante.",
    },
    {
      correo: "usuario3@email.com",
      password: "clave3",
      nombre: "NombreUsuario Tres",
      foto: "https://i.pravatar.cc/150?img=3",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      myhistory:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.Mauris placerat eleifend leo.Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.Nullam accumsan lorem in dui.Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia CuraeMorbi mattis ullamcorper velit. usce consequat arcu quis ante.",
    },
    {
      correo: "usuario4@email.com",
      password: "clave4",
      nombre: "NombreUsuario Cuatro",
      foto: "https://i.pravatar.cc/150?img=4",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      myhistory:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.Mauris placerat eleifend leo.Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.Nullam accumsan lorem in dui.Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia CuraeMorbi mattis ullamcorper velit. usce consequat arcu quis ante.",
    },
    {
      correo: "usuario5@email.com",
      password: "clave5",
      nombre: "NombreUsuario Cinco",
      foto: "https://i.pravatar.cc/150?img=5",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      myhistory:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.Mauris placerat eleifend leo.Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.Nullam accumsan lorem in dui.Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia CuraeMorbi mattis ullamcorper velit. usce consequat arcu quis ante.",
    },
    {
      correo: "usuario6@email.com",
      password: "clave6",
      nombre: "NombreUsuario Seis",
      foto: "https://i.pravatar.cc/150?img=6",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      myhistory:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.Mauris placerat eleifend leo.Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.Nullam accumsan lorem in dui.Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia CuraeMorbi mattis ullamcorper velit. usce consequat arcu quis ante.",
    },
    {
      correo: "usuario7@email.com",
      password: "clave7",
      nombre: "NombreUsuario Siete",
      foto: "https://i.pravatar.cc/150?img=7",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      myhistory:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.Mauris placerat eleifend leo.Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.Nullam accumsan lorem in dui.Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia CuraeMorbi mattis ullamcorper velit. usce consequat arcu quis ante.",
    },
    {
      correo: "usuario8@email.com",
      password: "clave8",
      nombre: "NombreUsuario Ocho",
      foto: "https://i.pravatar.cc/150?img=8",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      myhistory:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.Mauris placerat eleifend leo.Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.Nullam accumsan lorem in dui.Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia CuraeMorbi mattis ullamcorper velit. usce consequat arcu quis ante.",
    },
  ]);
});
