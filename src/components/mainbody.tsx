import { useState } from 'react'
import Form from './form'
import Recipe from './recipe'

export default function MainBody({} : {}) {

  const [recipe, setRecipe] = useState('')
  const callAPI = async () => {
    // const response = await fetch('http://localhost:5000/recipe')
    // const data = await response.json()
    // setRecipe(data)
    setRecipe('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae temporibus libero rerum voluptatum unde cupiditate ipsa molestiae autem suscipit facilis fuga laboriosam et nisi voluptates voluptatem aliquid quibusdam, eligendi optio necessitatibus nostrum. Beatae, at hic veritatis consequuntur dignissimos repellendus quo deserunt voluptas repudiandae, dolor accusamus incidunt, labore optio aperiam!');
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
    {recipe ? <Recipe content={ recipe } /> : null}
  </div>
}