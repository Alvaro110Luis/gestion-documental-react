import { useForm } from "react-hook-form";
import supabase from "../supabase/client";
import style from "./crearCuenta.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../Context";
function IniciaSesion() {
  const { users, setFocusUser } = useContext(MyContext);
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
          users.map((value, index) => {
            if (
              value.nombre == data.usuario &&
              value.contraseña == data.contraseña
            ) {
              setFocusUser(value);
              window.location = "/menu";
            }
          });
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
          value="Inicia Sesion"
          className={style.btnSubmit}
        ></input>
        <Link to="/">Registrarse</Link>
      </form>
    </>
  );
}
export default IniciaSesion;
