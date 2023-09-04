import "bootstrap/dist/css/bootstrap.css";
import imagen from "../assets/img/evolucion-lab/que-es-cluster.png";
const Presentacion = () => {
  const styles = {
    parrafo: { textaling: "justify" },
    div: { textaling: "center" },
  };
  return (
    <section className="presentacion p-2">
      <div className="row px-2 g-0">
        <div className="col-lg-6 col-12 p-2 shadow-sm">
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <img className="img-fluid rounded" src={imagen} alt="" />
          </div>
        </div>

        <div className="lightSection col-lg-6 col-12 p-4">
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <div className="row g-0">
              <div className="col-12">
                <h2 className="sectionTitle text-center font-bold m-3">
                  ¿Qué es LCI?
                </h2>
                <div className="sectionSeparator"></div>
              </div>
              <div className="col-12" style={styles.div}>
                <p style={styles.parrafo}>
                  Un laboratorio de alto desempeño (HPL, por sus siglas en
                  inglés) es una instalación científica diseñada para llevar a
                  cabo investigaciones y experimentos de alta complejidad en
                  diversas áreas de la ciencia y la tecnología. Un HPL se
                  caracteriza por estar equipado con instrumentación y equipos
                  de última generación que permiten llevar a cabo
                  investigaciones de alta precisión y con alto grado de
                  automatización.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Presentacion;
