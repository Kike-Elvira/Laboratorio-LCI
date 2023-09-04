import "bootstrap/dist/css/bootstrap.css";
const Videos = () => {
  return (
    <section className="videos lightSection bg-light p-2">
      <div className="row">
        <div className="col-12">
          <h2 className="sectionTitle text-center font-bold m-3">Videos de LCI</h2>
          <div className="sectionSeparator"></div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col text-center p-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bxWB3v9u3DA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-lg-4 col text-center p-3 ">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3o6AmVlHmcg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-lg-4 col text-center p-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VJB35ckKwls"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col text-center p-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/c4Yw4vpkHr4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-lg-4 col text-center p-3 ">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rDWAFSN9uJY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-lg-4 col text-center p-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gtt-At6tG_w"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Videos;
