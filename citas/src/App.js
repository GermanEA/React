import { useState, useEffect } from "react";
import Formulario from "./Components/Formulario";
import Cita from "./Components/Cita";

function App() {

  // Citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  // Array de citas
  const [ citas, addCitas ] = useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el State cambia
  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    citasIniciales 
      ? localStorage.setItem('citas', JSON.stringify(citas))
      : localStorage.setItem('citas', JSON.stringify([]))
   
  }, [citas] );

  // Función de coja las citas actuales y agregue la nueva
  const crearCita = cita => {
    addCitas([
      ...citas,
      cita
    ]);
  }

  // Función que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter( cita => cita.id !== id );
    addCitas(nuevasCitas);
  }

  // Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
             crearCita = { crearCita }
            />
          </div>
          <div className="one-half column">
            <h2>{ titulo }</h2>
            {citas.map(cita => (
              <Cita 
                key = { cita.id } 
                cita = { cita }
                eliminarCita = { eliminarCita }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
