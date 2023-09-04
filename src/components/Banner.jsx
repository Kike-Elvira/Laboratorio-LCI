import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import imagenLab from "../assets/img/banner/lab-01.png";
import imagenVisita_2016 from "../assets/img/banner/visita-2016.png";
import imagenVisita_2019 from "../assets/img/banner/visita-2019.png";

const Banner = () => {
  return (
    <section>
      <div
        id="myCarousel"
        className="carousel slide col-lg-12 col-sm-12"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="active"
            aria-current="true"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src={imagenLab}
              className="d-block w-100 align-middle"
              width="100%"
              height="100%"
            />
            <div className="container">
              <div className="carousel-caption d-flex flex-column">
                <h1 className="mainTitle text-center font-bold m-2">
                  Laboratorio de Computo Intensivo
                </h1>
                <h2 className="mainSubtitle text-center font-bold">
                  Ingenieria en sistemas computacionales
                </h2>
                <p></p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={imagenVisita_2019}
              className="d-block w-100 align-middle"
              width="100%"
              height="100%"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="mainTitle text-center font-bold m-2">
                  Laboratorio de Computo Intensivo
                </h1>
                <h2 className="mainSubtitle text-center font-bold">
                  Ingenieria en sistemas computacionales
                </h2>
                <p></p>
              </div>
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src={imagenVisita_2016}
              className="d-block w-100 align-middle"
              width="100%"
              height="100%"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="mainTitle text-center font-bold m-2">
                  Laboratorio de Computo Intensivo
                </h1>
                <h2 className="mainSubtitle text-center font-bold d-none d-md-inline-flex">
                  Ingenieria en sistemas computacionales
                </h2>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Banner;
