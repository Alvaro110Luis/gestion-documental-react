import "./registro.scss";
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
      <div className="contHead">
        <h1>
          Organiza, clasifica, accede,<br></br> y haz seguimiento...
        </h1>
        <p>
          <span className="logo">Mi</span> Docs
        </p>
      </div>
      <div className="contBody">
        <img src={imgInicio} width="800px" height="455px"></img>
        <form
          className="contRegistro"
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
              className="btnSubmit"
            ></input>
          </Link>
        </form>
      </div>
      <footer>
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
