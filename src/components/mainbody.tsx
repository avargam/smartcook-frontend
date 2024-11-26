import { useState } from 'react'
import Form from './form'
import Recipe from './recipe'
import ModifyButton from './modifybutton'
import Modal from './modal'

export default function MainBody({} : {}) {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [recipe, setRecipe] = useState({})
  const callAPI = async (formData: any) => {

    /* const dietOptions = [
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

    console.log(postData)

    const response = await fetch('http://localho.st:8080/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'mode': 'no-cors'
      },
      body: JSON.stringify(postData)
    });
    const data = await response.json()
    console.log(data) */
    const data = {
      Name: "Pasta con salsa de tomate",
      Ingredients: ["Pasta", "Tomates", "Cebolla", "Ajo", "Aceite de oliva", "Sal", "Pimienta"],
      Recipe: "1. Cocinar la pasta en agua hirviendo con sal. \n2. En una sartén, sofreír la cebolla y el ajo en aceite de oliva. \n3. Agregar los tomates y cocinar a fuego lento. \n4. Mezclar la salsa con la pasta y servir caliente."
    }
    setRecipe(data)
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
    { isModalOpen ? <Modal/> : null }
  </div>
}