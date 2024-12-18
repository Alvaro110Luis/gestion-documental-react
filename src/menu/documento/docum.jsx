import { useContext } from "react";
import style from "./docum.module.scss";
import { Link } from "react-router-dom";
import { MyContext } from "../../Context";
function Docum({ doc }) {
  const { setFocusDoc } = useContext(MyContext);
  return (
    <Link
      to="/menu/infoDoc"
      className={style.linkDoc}
      onClick={() => {
        setFocusDoc(doc);
      }}
    >
      <img src={doc.portada}></img>
    </Link>
  );
}
export default Docum;
