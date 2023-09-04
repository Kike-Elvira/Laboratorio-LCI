import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../assets/css/style.css";
import imagenGob from "../assets/img/encabezado/logo-gob-mx.png";
import imagenSeparador from "../assets/img/encabezado/linea-vertical-separador-logos.svg";
import imagenTecnm from "../assets/img/encabezado/logo-tecnm.svg";
import imagenItver from "../assets/img/encabezado/itver-logo.PNG";
import imagenSep from "../assets/img/encabezado/logo-educacion.svg";
import imagenBuzon from "../assets/img/encabezado/correo-icono.png";
import imagenIdiomas from "../assets/img/encabezado/idiomas.png";

const Logotipos = () => {
  const styles = {
    altura60: 60,
    altura70: 70,
  };

  return (
    <div className="row g-0 d-none d-md-flex">
      <div className="col align-items-start">
        <div className="row g-0 align-items-center">
          {/* Logo de Gobierno */}
          <div className="col-sm-auto">
            <a href="https://www.gob.mx/" target="_blank">
              <img
                src={imagenGob}
                height={styles.altura60}
                alt="Gobierno de México"
              />
            </a>
          </div>
          {/*Separador */}
          <div className="col-sm-auto">
            <img
              src={imagenSeparador}
              height={styles.altura70}
              alt="separador"
            />
          </div>
          {/* Logo de SEP */}
          <div className="col-sm-auto">
            <a href="https://www.gob.mx/sep" target="_blank">
              <img
                src={imagenSep}
                height="60"
                alt="Secretaria de Educación Pública"
              />
            </a>
          </div>
          {/*Separador */}
          <div className="col-sm-auto">
            <img src={imagenSeparador} height="70" alt="separador" />
          </div>
          {/*Logo TECNM  */}
          <div className="col-sm-auto">
            <a href="https://www.tecnm.mx/" target="_blank">
              <img src={imagenTecnm} height="100" alt="TECNM" />
            </a>
          </div>
          {/*Separador */}
          <div className="col-sm-auto">
            <img src={imagenSeparador} height="70" alt="separador" />
          </div>
          {/*Logo ITVER */}
          <div className="col-sm-auto">
            <div className="d-flex px-2 w-80 h-auto">
              <a
                href="https://www.veracruz.tecnm.mx/index.php"
                target={"_blank"}
              >
                <img
                  src={imagenItver}
                  alt="ITVER-logo"
                  height="60"
                  className="ITVER"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-auto justify-content-end d-none d-md-block">
        <a
          className="text-decoration-none"
          href="https://login.microsoftonline.com/?whr=tecnm.mx"
          target="_blank"
        >
          <img style={{ width: "15%" }} src={imagenBuzon} alt="Buzón" />
        </a>
        <a
          className="text-decoration-none"
          href="https://www.tecnm.mx/"
          target="_blank"
        >
          <img src={imagenIdiomas} height="40" alt="Gobierno de México" />
        </a>
      </div>
    </div>
  );
};

export default Logotipos;
