import "bootstrap/dist/css/bootstrap.css";
import image from "../assets/img/evolucion-lab/Lab-1.0.jpg"
const Evolucion_Laboratorio = () => {
  const styles = {
    parrafo: { textaling: "justify" },
    div: { textaling: "center" },
  };
  return (
    <section className="lightSection bg-light p-2">
      <div className=" historia row px-2 g-0">
        <div className="lightSection col-lg-6 col-12 p-4">
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <div className="row g-0">
              <div className="col-12">
                <h2 className="sectionTitle text-center font-bold m-3">
                  Un poco de Historia.
                </h2>
                <div className="sectionSeparator"></div>
              </div>
              <div className="col-12" style={styles.div}>
                <p style={styles.parrafo}>
                  El laboratorio de cómputo de la universidad comenzó con unas
                  pocas computadoras para que los estudiantes pudieran
                  utilizarlas para sus proyectos. Sin embargo, con el tiempo, la
                  demanda de recursos computacionales creció y se decidió crear
                  un laboratorio de cómputo con cluster. La universidad invirtió
                  en un conjunto de computadoras interconectadas que trabajan
                  juntas como si fueran una sola unidad de procesamiento. Con
                  esta nueva infraestructura, los estudiantes y profesores
                  pudieron realizar proyectos más grandes y complejos que
                  requerían una gran cantidad de recursos computacionales. Con
                  el tiempo, el laboratorio de cómputo con cluster se expandió y
                  se convirtió en un recurso valioso para la investigación y el
                  desarrollo en la universidad y en la comunidad en general.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-12 p-2 shadow-sm">
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <img
              className="img-fluid rounded"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolucion_Laboratorio;
