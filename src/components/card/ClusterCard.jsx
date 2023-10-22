import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../card/Card.css";
import { useState } from "react";
import agave from "../../assets/img/logos/Agave.png";
import peyote from "../../assets/img/logos/Peyote.png";
import nopal from "../../assets/img/logos/Nopal.png";
const ClusterCard = () => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <section className="lightSection bg-light p-2">
      <h1 className="sectionTitle text-center font-bold m-3">
        Hojas tecnicas Clusters
      </h1>
      <div className="sectionSeparator"></div>

      <div class="row d-flex justify-content-center">
        {/*  <!--AGAVE--> */}
        <div className="col-sm-12 col-md-6 col-lg-4 card_size">
          <div className={`card mx-auto  ${isHovered ? "card-hover" : ""}`}>
            <img src={agave} class="card-img-top card_image" alt="..." />
            <div class="card-body align-items-center">
              <h5 class="card-title">Agave</h5>
              <p class="card-text">
                Cluster de Producción para simulaciones finales, Capacidad de
                5590 Gflops en 70 nucleos de 64 bits
              </p>
              <button
                type="button"
                class="color_buton"
                data-bs-toggle="modal"
                data-bs-target="#ModalAgave"
                onClick={handleMouseLeave}
              >
                Ver Especificaciones
              </button>
            </div>
            {/*   <!-- MODAL AGAVE--> */}

            <div
              class="modal fade"
              id="ModalAgave"
              tabindex="-1"
              role="dialog"
              aria-labelledby="ModalAgaveLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ModalAgaveLabel">
                      Agave
                    </h5>
                  </div>
                  <div class="modal-body text-center">
                    <h2>32 cores en :</h2>
                    <li>1 mtro c/2 Xeon Quadcore E5530 de 2.4 Ghz</li>
                    <li>1 slave c/1 Xeon Quadcore E5530 de 2.4 Ghz</li>
                    <li>2 slave c/1 Xeon Quadcore E5505 de 2.0 Ghz</li>
                    <li>3 slave c/1 Xeon Quadcore E5460 de 3.16 Ghz</li>
                    <h4 class="text-left"> 331.168 Gflops</h4>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={handleMouseEnter}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--PEYOTE--> */}
        <div className="col-sm-12 col-md-6 col-lg-4 card_size">
        <div className={`card mx-auto  ${isHovered ? "card-hover" : ""}`}>
                      <img src={peyote} class="card-img-top card_image" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Peyote</h5>
              <p class="card-text">
                Cluster de Visualización de 12K (74.7 megapixeles). Capacidad de
                621 Gflops en 28 núcleos de 64 bits+ 7197 GflopsSP en 3456
                núcleos CUDA
              </p>
              <button
                type="button"
                class="color_buton"
                data-bs-toggle="modal"
                data-bs-target="#ModalPeyote"
                onClick={handleMouseLeave}
              >
                Ver Especificaciones
              </button>
            </div>
            {/* <!--MODAL PEYOTE--> */}
            <div
              class="modal fade"
              id="ModalPeyote"
              tabindex="-1"
              role="dialog"
              aria-labelledby="ModalPeyoteLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ModalAgaveLabel">
                      Peyote
                    </h5>
                  </div>
                  <div class="modal-body text-center">
                    <h4>28 cores en:</h4>
                    <li>5 Intel Core2 Quad.</li>
                    <li>4 Intel I5 Quad.</li>
                    <br />
                    <h4>3456 cudaCores en:</h4>
                    <li>5 Nvidia GTX 650 (384 core cuda).</li>
                    <li>3 Nvidia GTX 750 (512 core cuda).</li>
                    <br />
                    <h4 class="text-left">
                      331.168 Gflops <br />
                      621.84 Gflops <br />
                      7197 GflopsSP
                    </h4>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={handleMouseEnter}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!--NOPAL--> */}
        <div className="col-sm-12 col-md-6 col-lg-4 card_size">
        <div className={`card mx-auto  ${isHovered ? "card-hover" : ""}`}>
                      <img src={nopal} class="card-img-top card_image" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Nopal</h5>
              <p class="text-center">
                Cluster de Enseñanza y desarrollos iniciales Capacidad de 98
                Gflops y 20 núcleos de 64 bits
              </p>
              <button
                type="button"
                class="color_buton"
                data-bs-toggle="modal"
                data-bs-target="#ModalNopal"
                onClick={handleMouseLeave}
              >
                Ver Especificaciones
              </button>
            </div>
            {/*MODAL NOPAL*/}
            <div
              class="modal fade"
              id="ModalNopal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="ModalPeyoteLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ModalAgaveLabel">
                      Nopal
                    </h5>
                  </div>
                  <div class="modal-body text-center">
                    <h2>20 cores en:</h2>
                    <li>1 mtro P4 840 3.26 Ghz</li>
                    <li>4 slave Core 2 Duo E8200 2.66 Ghz</li>
                    <h4> 98.11 Gflops</h4>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={handleMouseEnter}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClusterCard;
