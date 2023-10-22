import "./App.css";
import Banner from "./components/Banner";
import Encabezado from "./components/Encabezado";
import Evolucion_Laboratorio from "./components/Evolucion_Laboratorio";
import Footer from "./components/Footer";
import Logotipos from "./components/Logotipos";
import Presentacion from "./components/Presentacion";
import Proyectos from "./components/Proyectos";
import Videos from "./components/Videos";
import ClusterCard from "./components/card/ClusterCard";

function App() {
  return (
    <div className="App">
      <Encabezado></Encabezado>
      <Logotipos></Logotipos>
      <Banner></Banner>
      <Presentacion></Presentacion>
      <Evolucion_Laboratorio></Evolucion_Laboratorio>
      <Proyectos></Proyectos>
      <Videos></Videos>
      <ClusterCard></ClusterCard>
      <Footer></Footer>
    </div>
  );
}

export default App;
