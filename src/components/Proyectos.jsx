import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/style.css";
import imgKinect from "../assets/img/posters/Poster_Proy_Kinect.png"
import imgParticulas from "../assets/img/posters/Poster_Proy_Particulas.png"
const Proyectos = () => {
  const styles = {
    parrafo: { textaling: "justify" },
    div: { textaling: "center" },
  };
  return (
    <section className="proyectos lightSection bg-light p-2" style={{maxWidth:"84.2rem"}}>
      <div className="row justify-content-center">
        <div className="col-lg-4 col text-center p-3">
          <div className="area shadow-sm p-4">
            <a href="img/posters/Poster_Proy_Kinect.png">
              <img
                className="items-center"
                src={imgKinect}
                alt=""
                style={{width: '10rem'}}
              />
            </a>

            <h3 className="areaTitle text-center font-bold text-xl">
              Proyecto Kinect
            </h3>
            <p className="areaText">
              Desarrollar un prototipo de interfaz natural de usuario basado en
              Kinet, usando librerias de software libre y processing.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col text-center p-3">
          <div className="area shadow-sm p-4">
            <a href="img/posters/Poster_Proy_Particulas.png">
              <img
                className="items-center"
                src={imgParticulas}
                alt=""
                style={{width: '10rem'}}
              />
            </a>

            <h3 className="areaTitle text-center font-bold text-xl">
              Proyecto Particulas
            </h3>
            <p className="areaText">
              Este simulador aprovecha los recursos de los clústers contruidos
              en el LCI para el renderizado de animaciones 3D.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col text-center p-3">
          <h2 className="sectionTitle text-lg-center font-bold m-3">
            Proyectos Realizados
          </h2>
          <div className="sectionSeparator"></div>

          <p style={styles.parrafo}>
            Realizar proyectos y prácticas universitarias en clusters puede ser
            muy beneficioso para los estudiantes, ya que les proporciona una
            experiencia práctica valiosa y los prepara para el mercado laboral.
            También puede ser beneficioso para las instituciones educativas, ya
            que puede mejorar la eficiencia en el procesamiento de datos y
            reducir costos.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Proyectos;
