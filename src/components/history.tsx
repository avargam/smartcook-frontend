import { useState } from 'react';
import Recipe from './recipe';

export default function History({ content, onRequest } : { content: any, onRequest: () => void }) {

  const [historyRecipe, setHistoryRecipe] = useState({});
  const handleRecipeClick = (recipe: any) => {
    console.log(recipe);
    setHistoryRecipe({recipe: recipe});
  }

  return (
    <div className="history-div">
      <button className="highlight history-button" onClick={ onRequest }>
        Ver últimas recetas generadas
      </button>
      <div className="history-container">
        { Object.keys(content).length > 0 && content.recipeHistory && content.recipeHistory.length > 0 ? (
          content.recipeHistory.map((recipe: any, index: number) => (
            <button key={index} className="history-recipe-button" onClick={ () => handleRecipeClick(recipe) }>
              { `Receta n°${index + 1}`}
            </button>
          ))
        ) : ( null )}
        { Object.keys(content).length > 0 && content.extraRecipe ? (
          <button className="history-recipe-button" onClick={ () => handleRecipeClick(content.extraRecipe) }>
            { `Receta extra`}
          </button>
        ) : ( null )}
      </div>
      { Object.keys(historyRecipe).length > 0 ? <Recipe content={ historyRecipe } /> : null }
    </div>
  );
}