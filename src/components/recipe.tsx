export default function Recipe({ content } : { content: any }) {
  console.log("Recipe content", content);

  return <div className="recipe">
      <h2>{ content.recipe.Name ? content.recipe.Name.trim() : null }</h2>
      { content.recipe.Ingredients ? <><h3>Ingredientes:</h3><pre>{ content.recipe.Ingredients.trim() }</pre></>: null }
      <h3>Preparación:</h3>
      <pre>{ content.recipe.Recipe.trim() }</pre>
    </div>
}