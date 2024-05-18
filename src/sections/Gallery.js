import VirtualReality from "../components/VirtualReality";
import Vr360 from "../components/Vr360";
import Travels from "../components/Travels";
import Sf from "../components/Sf";
import Sa from "../components/Sa";

function Gallery({ children, menuOption }) {
  return (
    <section className="servicios">
      {menuOption === "" && (
        <div>
          <h1>Hola</h1>
        </div>
      )}
      {menuOption === "meeting" && <VirtualReality></VirtualReality>}
      {menuOption === "vr" && <VirtualReality></VirtualReality>}
      {menuOption === "travels" && <Travels></Travels>}
      {menuOption === "team" && <VirtualReality></VirtualReality>}
      {menuOption === "360" && <Vr360></Vr360>}
      {menuOption === "sf" && <Sf></Sf>}
      {menuOption === "sa" && <Sa></Sa>}
      {/*MenuLateral */}
      {children}
    </section>
  );
}

export default Gallery;
