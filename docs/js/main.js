import { recipes } from "./recipes.js";

/**Variables */
let recipesList = document.getElementById('recipes-list');

/*function to show the ingredient list*/
function recipeIngredientsListTemplate (recipeIngredients){
  if (!recipeIngredients.unit && !recipeIngredients.quantity) {
    return `<li class="card-recipe-list-ingredients-name">
            <strong>${recipeIngredients.ingredient}</strong>
            </li>`;
  }
  if (!recipeIngredients.unit && recipeIngredients.quantity) {
    return `<li class="card-recipe-list-ingredients-name">
           <strong>${recipeIngredients.ingredient}:</strong> ${recipeIngredients.quantity}
           </li>`;
  } else
  return `<li class="card-recipe-list-ingredients-name">
         <strong>${recipeIngredients.ingredient}:</strong> ${recipeIngredients.quantity} ${recipeIngredients.unit}
         </li>`;
};

 /*function showing the card list using bootstrap classes*/
function recipesListTemplate (recipe) {
  return `<div class="col">
          
<div class="card-recipe">
        <img src="./photos/img.png" class="card-img-top" alt="recette de ${recipe.name} />
        <div class="card-recipe-body">
            <div class="card-recipe-header">
                <h5 class="card-recipe-title">${recipe.name}</h5>
                <div class="card-recipe-time">
                    <span><i class="far fa-clock"></i></span>
                    <p>${recipe.time} min</p>
                </div>
            </div>
            <div class="card-recipe-content">
                <ul id="card-recipe-list-ingredients">
                ${recipe.ingredients.map(recipeIngredientsListTemplate).join("")}
                </ul>
                <p class="card-recipe-text"> ${recipe.description}</p>
            </div>
        </div>
    </div>
    </div>
</div>
      `;
};

recipesList.innerHTML = recipes.map((recipe) => recipesListTemplate(recipe)).join("");

 export { recipesListTemplate, recipeIngredientsListTemplate} 
