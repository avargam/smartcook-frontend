import { useRef, useEffect, useState } from 'react'

export default function Modal({ modal, setModal, onSubmit } : { modal: boolean, setModal: (value: boolean) => void, onSubmit: (data: any) => void }) {
  const ref = useRef(null);

  const [ingredientesAgregar, setIngredientesAgregar] = useState("");
  const [ingredientesEliminar, setIngredientesEliminar] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = {
      ingredientesAgregar,
      ingredientesEliminar
    };
    console.log(formData);
    onSubmit(formData);
    setModal(false);
  }

  useEffect(() => {
    if (modal) {
      (ref.current as any).showModal();
    } else {
      (ref.current as any).close();
    }}, [modal]);
  
  return <dialog 
    ref={ ref } 
    onCancel={ () => setModal(false) }
    className="modal"
    autoFocus
  >
    <form onSubmit={ handleSubmit } >
      <p className='highlight'>Agregar ingredientes:</p>
      <input type="text" placeholder="Ej: tomate, cebolla, ajo, etc." onChange={ e => setIngredientesAgregar(e.target.value)}/>
      <p className='highlight'>Eliminar ingredientes:</p>
      <input type="text" placeholder="Ej: mani, huevos, gluten, etc." onChange={ e => setIngredientesEliminar(e.target.value)}/>
    <div className="modal-buttons">
      <button type="submit" className='submit-button'>Enviar</button>
      <button className='cancel-button' onClick={ () => setModal(false) }>Cancelar</button>
    </div>
    </form>
  </dialog>
}