import { useState } from "react";

interface FormProps {
  onSubmit: (data: any) => void;
}

export default function Form({ onSubmit } : FormProps) {
  const [veggie, setVeggie] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [kosher, setKosher] = useState(false);
  const [halal, setHalal] = useState(false);
  const [keto, setKeto] = useState(false);

  const [alergias, setAlergias] = useState("");
  const [tipoCocina, setTipoCocina] = useState("");
  const [dificultad, setDificultad] = useState("baja"); 
  const [tiempoPreparacion, setTiempoPreparacion] = useState("15");
  const [ingredientes, setIngredientes] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = {
      veggie,
      vegan,
      kosher,
      halal,
      keto,
      alergias,
      tipoCocina,
      dificultad,
      tiempoPreparacion,
      ingredientes
    };
    //console.log(formData);
    onSubmit(formData);
  }

  return <form className="main-form" onSubmit= { handleSubmit }>
    <p><i className="highlight">Escoge una o más opciones:</i></p>
    <div className="diet-options">
      <button type="button" className={`diet-option ${veggie ? "active-btn" : ""}`}  onClick={() => setVeggie(!veggie)}>Vegetariano</button>
      <button type="button" className={`diet-option ${vegan ? "active-btn" : ""}`} onClick={() => setVegan(!vegan)}>Vegano</button>
      <button type="button" className={`diet-option ${kosher ? "active-btn" : ""}`} onClick={() => setKosher(!kosher)}>Kosher</button>
      <button type="button" className={`diet-option ${halal ? "active-btn" : ""}`} onClick={() => setHalal(!halal)}>Halal</button>
      <button type="button" className={`diet-option ${keto ? "active-btn" : ""}`} onClick={() => setKeto(!keto)}>Keto</button>
    </div>
    <p className="highlight">Alergias:</p>
    <input type="text" placeholder="Ej: mani, huevos, gluten, etc." onChange={e => setAlergias(e.target.value)}/>
    <p className="highlight">Tipo de cocina:</p>
    <input type="text" placeholder="Ej: mexicana, italiana, chilena, etc." onChange={e => setTipoCocina(e.target.value)} />
    <p className="highlight">Dificultad:</p>
    <select onChange={e => setDificultad(e.target.value)}>
      <option value="baja">Fácil</option>
      <option value="mediana">Intermedio</option>
      <option value="alta">Difícil</option>
    </select>
    <p className="highlight">Tiempo de preparación:</p>
    <select onChange={e => setTiempoPreparacion(e.target.value)}>
      <option value="15">Menos de 30 minutos</option>
      <option value="30">Entre 30 y 60 minutos</option>
      <option value="60">Más de 60 minutos</option>
    </select>
    <p className="highlight">Ingredientes disponibles:</p>
    <input type="text" placeholder="Ej: pollo, arroz, tomate, etc." onChange={e => setIngredientes(e.target.value)} />
    <button type="submit" className="primary-button">Generar Receta</button>
  </form>
}