import style from "./registro.module.scss";
import imgInicio from "../assets/paginaprincipal.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <header className={style.contHead}>
        <h1>
          Organiza, clasifica, accede,<br></br> y haz seguimiento...
        </h1>
        <p>
          <span className={style.logo}>Mi</span> Docs
        </p>
      </header>
      <div className={style.contBody}>
        <img src={imgInicio} width="800px" height="455px"></img>
        <form
          className={style.contRegistro}
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div>
            <input
              type="text"
              {...register("usuario", {
                required: {
                  value: false,
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
                  value: false,
                  message: "se requiere contraseña",
                },
              })}
            ></input>
            <br></br>
            {(errors.contraseña && (
              <label>{errors.contraseña.message}</label>
            )) || <label>Contraseña</label>}
          </div>
          <Link to="/menu">
            <input
              type="submit"
              value="Registrarse"
              className={style.btnSubmit}
            ></input>
          </Link>
        </form>
      </div>
      <footer className={style.contFooter}>
        <p>
          Documentos · Informes · Contratos · Memorias · Folletos · ¡Todo en un
          solo click!
        </p>
        <p>© Todos los Derechos Reservados 2024</p>
      </footer>
    </>
  );
}

export default Registro;
