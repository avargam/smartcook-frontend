import { useState } from 'react'
import Form from './form'
import Recipe from './recipe'
import ModifyButton from './modifybutton'
import Modal from './modal'
import History from './history'

export default function MainBody({} : {}) {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [recipe, setRecipe] = useState({})
  const [history, setHistory] = useState({})

  const callAPI = async (formData: any) => {

    const dietOptions = [
      formData.veggie && "Vegetarian",
      formData.vegan && "Vegan",
      formData.kosher && "Kosher",
      formData.halal && "Halal",
      formData.keto && "Keto"
    ].filter(Boolean).join(", ");

    const postData = {
      "dif": formData.dificultad,
      "time": parseInt(formData.tiempoPreparacion, 10),
      "ings": formData.ingredientes,
      "dieta": dietOptions,
      "all": formData.alergias,
      "cuis": formData.tipoCocina
    }

    console.log(postData);

    const response = await fetch('https://smartcook-backend-deploy.onrender.com/form', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://smartcook-frontend.onrender.com'
      }
    });
    const data = await response.json();
    console.log(data);
    setRecipe(data);
  }

  const callAPIModify = async (formData: any) => {
    const postData = {
      "add": formData.ingredientesAgregar,
      "rm": formData.ingredientesEliminar
    }

    console.log(postData);

    const response = await fetch('https://smartcook-backend-deploy.onrender.com/recipe', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://smartcook-frontend.onrender.com'
      }
    });
    const data = await response.json();
    setRecipe(data);
  }

  const callAPIHistory = async () => {
    
    const response = await fetch('https://smartcook-backend-deploy.onrender.com/history', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://smartcook-frontend.onrender.com'
      }
    });
    const data = await response.json();
    console.log(data);
    setHistory(data);
  }

  return <div className="main-body">
    <p className='par'> 
      En Nestlé, creemos que la alimentación puede ser un motor de cambio positivo, no solo para nuestras
      vidas, si no también para el planeta. Con el lanzamiento de <b>Nestlé SmartCook</b>, buscamos inspirar 
      a las personas a disfrutar de una cocina deliciosa y sostenible.
    </p>
    <p className='par'>
      Las recetas son generadas con ingredientes que promueven el uso responsable de recursos, fomentan la 
      biodiversidad y minimizan el desperdicio de alimentos. Al elegir estas opciones, no solo alimentamos
      nuestro cuerpo, si no que también contribuimos a un futuro más saludable y equilibrado para nuestro
      entorno. Juntos, podemos saborear un mundo mejor.
    </p>
    <Form onSubmit={ callAPI }/>
    { Object.keys(recipe).length > 0 ? <><Recipe content={ recipe } /><ModifyButton onSubmit={() => setIsModalOpen(prev => !prev) }/></> : null}
    { isModalOpen ? <Modal modal={ isModalOpen } setModal={ setIsModalOpen } onSubmit={ callAPIModify }/> : null }
    <History content={ history } onRequest={ callAPIHistory }/>
  </div>
}