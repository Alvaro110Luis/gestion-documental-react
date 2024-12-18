import React, { createContext, useState } from "react";
import img1 from "./assets/documentoPruebapng.png";
import img2 from "./assets/infoDocimagendeejemplo.png";
// 1. Crear el Context
export const MyContext = createContext();

// 2. Crear el Proveedor
export const MyContextProvider = ({ children }) => {
  const [focusDoc, setFocusDoc] = useState({});
  const [categoria, setCategoria] = useState("");
  const [cats, setCats] = useState([]);
  const [focusUser, setFocusUser] = useState({});
  const [documentos, setDocumentos] = useState([
    {
      id: 1,
      titulo: "documento1",
      autor: "pedro",
      categoria: "literatura",
      fisico: true,
      digital: false,
      paginas: 100,
      revision: "version1",
      ubicacion: "ubi1",
      portada: img2,
      archivo: "",
      resumen:
        "Obra Iconica Obra Literaria de caracter universal, vibrante,emocionante que nos remonta a la epocamedieval alta y el renacimiento",
      fecha: new Date(2021, 12, 1, 10, 30, 0).toISOString().split("T")[0],
    },
    {
      id: 1,
      titulo: "documento12",
      autor: "juan",
      categoria: "comedia",
      fisico: true,
      digital: true,
      paginas: 120,
      revision: "version12",
      ubicacion: "ubi1",
      portada: img1,
      archivo: "",
      resumen:
        "Obra Iconica Obra Literaria de caracter universal, vibrante,emocionante que nos remonta a la epocamedieval alta y el renacimiento",
      fecha: new Date(2024, 2, 5, 12, 0, 0).toISOString().split("T")[0],
    },
    {
      id: 1,
      titulo: "documento12",
      autor: "juan",
      categoria: "comedia",
      fisico: true,
      digital: true,
      paginas: 120,
      revision: "version12",
      ubicacion: "ubi1",
      portada: img1,
      archivo: "",
      resumen:
        "Obra Iconica Obra Literaria de caracter universal, vibrante,emocionante que nos remonta a la epocamedieval alta y el renacimiento",
      fecha: new Date(2024, 2, 5, 12, 0, 0).toISOString().split("T")[0],
    },
    {
      id: 1,
      titulo: "documento12",
      autor: "juan",
      categoria: "comedia",
      fisico: true,
      digital: true,
      paginas: 120,
      revision: "version12",
      ubicacion: "ubi1",
      portada: img1,
      archivo: "",
      resumen:
        "Obra Iconica Obra Literaria de caracter universal, vibrante,emocionante que nos remonta a la epocamedieval alta y el renacimiento",
      fecha: new Date(2024, 2, 5, 12, 0, 0).toISOString().split("T")[0],
    },
    {
      id: 1,
      titulo: "documento12",
      autor: "juan",
      categoria: "comedia",
      fisico: true,
      digital: true,
      paginas: 120,
      revision: "version12",
      ubicacion: "ubi1",
      portada: img1,
      archivo: "",
      resumen:
        "Obra Iconica Obra Literaria de caracter universal, vibrante,emocionante que nos remonta a la epocamedieval alta y el renacimiento",
      fecha: new Date(2024, 2, 5, 12, 0, 0).toISOString().split("T")[0],
    },
    {
      id: 1,
      titulo: "documento12",
      autor: "juan",
      categoria: "comedia",
      fisico: true,
      digital: true,
      paginas: 120,
      revision: "version12",
      ubicacion: "ubi1",
      portada: img1,
      archivo: "",
      resumen:
        "Obra Iconica Obra Literaria de caracter universal, vibrante,emocionante que nos remonta a la epocamedieval alta y el renacimiento",
      fecha: new Date(2024, 2, 5, 12, 0, 0).toISOString().split("T")[0],
    },
    {
      id: 1,
      titulo: "documento12",
      autor: "juan",
      categoria: "comedia",
      fisico: true,
      digital: true,
      paginas: 120,
      revision: "version12",
      ubicacion: "ubi1",
      portada: img1,
      archivo: "",
      resumen:
        "Obra Iconica Obra Literaria de caracter universal, vibrante,emocionante que nos remonta a la epocamedieval alta y el renacimiento",
      fecha: new Date(2024, 2, 5, 12, 0, 0).toISOString().split("T")[0],
    },
    {
      id: 1,
      titulo: "documento12",
      autor: "juan",
      categoria: "comedia",
      fisico: true,
      digital: true,
      paginas: 120,
      revision: "version12",
      ubicacion: "ubi1",
      portada: img1,
      archivo: "",
      resumen:
        "Obra Iconica Obra Literaria de caracter universal, vibrante,emocionante que nos remonta a la epocamedieval alta y el renacimiento",
      fecha: new Date(2024, 2, 5, 12, 0, 0).toISOString().split("T")[0],
    },
  ]);
  const [users, setUsers] = useState([
    { id: 1, nombre: "pedro", contraseña: "5678", documentos },
    { id: 1, nombre: "maria", contraseña: "1234", documentos },
    { id: 1, nombre: "juan", contraseña: "9012", documentos },
  ]);

  return (
    <MyContext.Provider
      value={{
        documentos,
        setDocumentos,
        users,
        setUsers,
        focusUser,
        setFocusUser,
        focusDoc,
        setFocusDoc,
        categoria,
        setCategoria,
        cats,
        setCats,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
