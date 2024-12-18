import { useForm } from "react-hook-form";
import supabase from "../supabase/client";
import style from "./crearCuenta.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../Context";
function Crearcuenta() {
  const { users, setUsers } = useContext(MyContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form
        className={style.contRegistro}
        onSubmit={handleSubmit((data) => {
          const newIt = {
            id: users.length + 1,
            nombre: data.usuario,
            contraseña: data.contraseña,
          };
          setUsers((prevIt) => [...prevIt, newIt]);
          console.log(users);
          window.location = "/iniciaSesion";
        })}
      >
        <div>
          <input
            type="text"
            autoComplete="off"
            {...register("usuario", {
              required: {
                value: true,
                message: "Se requiere un usuario",
              },
            })}
          ></input>
          <br></br>
          {(errors.usuario && <label>{errors.usuario.message}</label>) || (
            <label>Usuario</label>
          )}
        </div>
        <div>
          <input
            type="password"
            {...register("contraseña", {
              required: {
                value: true,
                message: "se requiere contraseña",
              },
            })}
          ></input>
          <br></br>
          {(errors.contraseña && (
            <label>{errors.contraseña.message}</label>
          )) || <label>Contraseña</label>}
        </div>
        <input
          type="submit"
          value="Registrarse"
          className={style.btnSubmit}
        ></input>
        <Link to="/iniciaSesion">Iniciar Sesion</Link>
      </form>
    </>
  );
}
export default Crearcuenta;
