export default function Recipe({ content } : { content: any }) {
  return <div className="recipe">
      <h2>{ content.Name }</h2>
      <h3>Ingredientes:</h3>
        <ul>
          { content.Ingredients ? content.Ingredients.map((ingredient: string, index: number) => <li key={index}>{ ingredient }</li>) : null }
        </ul>
      <h3>Preparación:</h3>
      <pre>{ content.Recipe }</pre>
    </div>
}