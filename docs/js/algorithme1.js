import {recipesListTemplate, recipeIngredientsListTemplate} from "./main.js";
import { recipes } from "./recipes.js";

/** variables*/
const inputIngredient   = document.querySelector('.button--blue');
const inputAppliance    =  document.querySelector('.button--green');
const inputUsetensils   = document.querySelector('.button--red');
let inputResult         = document.querySelector('.input-result');
let mainInput           = document.querySelector('.form-control');
let recipesList         = document.getElementById('recipes-list');
let textInput           = document.querySelector('.text-input');
let item                = document.querySelectorAll('.item'); 
let filteredUstensil    = [];
let filteredRecipes     = [];
let filteredIngredients = [];

/**listen to the input
/*show the inputs in the span of the top
/*call to function displaying recipes*/


/** search ingredients in the main bar of search */
mainInput.addEventListener ( 'input', () => {
         if ( mainInput.value.length > 2 ) {
                 inputResult.innerHTML = mainInput.value;
                 textInput.style.visibility = "visible";
                 filterRecipesIngredients ( mainInput ) ;
                 recipesList.innerHTML = filteredIngredients.map((recipe) => recipesListTemplate(recipe)).join("");
          if ( filteredIngredients == "" ) {
                 let error = document.createElement('div');
                 error .textContent = "« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
                 recipesList.innerHTML = error.textContent;
                }                       
         }
         })

       
/**search in ingrdient input*/
inputIngredient.addEventListener ('input', () => {
         if ( inputIngredient.value.length > 2 ) {
                inputResult.innerHTML = inputIngredient.value;
                textInput.style.visibility = "visible";
                filterRecipesIngredients(inputIngredient);
                recipesList.innerHTML = filteredIngredients.map((recipe) => recipesListTemplate(recipe)).join(""); 
         if ( filteredIngredients == "" ) {
                let error = document.createElement('div');
                error .textContent = "« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
                recipesList.innerHTML = error.textContent;

        } }
})
/*search in appliance input*/
inputAppliance.addEventListener ( 'input', () => {
         if ( inputAppliance.value.length > 2 ) {
                inputResult.innerHTML = inputAppliance.value;
                filterRecipesAppliance(inputAppliance);
                recipesList.innerHTML = filteredRecipes.map((recipe) => recipesListTemplate(recipe)).join("");
        if ( filteredRecipes == "" ) {
                let error = document.createElement('div');
                error .textContent = "« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
                recipesList.innerHTML = error.innerText;
    }
        } 
 });
 
 
/*search in usetensils input*/
 inputUsetensils.addEventListener ( 'input', () => {
         if ( inputUsetensils.value.length > 2 ) {
                inputResult.innerHTML = inputUsetensils.value;
                filterRecipesUstensils(inputUsetensils);
                recipesList.innerHTML = filteredUstensil.map((recipe) => recipesListTemplate(recipe)).join("");
         if ( filteredUstensil == "" ) {
                let error = document.createElement('div');
                error.textContent = "« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
                recipesList.innerHTML = error.textContent;
     }
    }
 })

/**the functions to filter recipes  */
/**filter the appliances */
 function filterRecipesAppliance ( inputAppliance ) {
          for ( let i=0 ; i < recipes.length ; i++ ) {
                if ( recipes[i].appliance.toLowerCase() == inputAppliance.value.toLowerCase() ) {
                //test if recipes exists  yet 
                if ( !filteredRecipes.includes(recipes[i]) ) {
                 filteredRecipes.push(recipes[i]);
       }
      }
    }
   }
  
  
 /**filter ustensils */
 
function filterRecipesUstensils ( inputUsetensils ) {
                let ustensilsTable = []
          for ( let l=0 ; l < recipes.length ; l++ ) {
                ustensilsTable.push(recipes[l].ustensils)
                for ( let i=0; i < ustensilsTable.length ; i++ ) {
                       for ( let elt in ustensilsTable[i] ) {
                             if ( ustensilsTable[i][elt].toLowerCase() == inputUsetensils.value.toLowerCase() ) {
                             if ( !filteredUstensil.includes(recipes[l]) ) {
                                       filteredUstensil.push(recipes[l])}
       }
      }
     }
    }
   } 

/**filter ingredients */
 function filterRecipesIngredients ( inputIngredient ) {
         for ( let i=0 ; i<recipes.length ; i++ ) {
              let tableIngredientsDetails = recipes[i].ingredients;
                  for ( let n in tableIngredientsDetails ) {
                      let tableIngredients = tableIngredientsDetails[n].ingredient.toLowerCase();
                          if ( tableIngredients == inputIngredient.value.toLowerCase() ) {
                                      filteredIngredients.push(recipes[i]);
        }
      }
    }
  }
 

 /**search by clicking on the item in dropdown-body */
 /** filter by selected item in the dropdown */

for ( let elt  of item)  { let valueItem = elt.dataset.value.toLowerCase();
  elt.addEventListener ( 'click', () => {
        switch (elt.parentNode.className  )  {
        case  "appliance-list":
                recipes.filter((recipe) => { if ( recipe.appliance.toLowerCase() == valueItem) {filteredRecipes.push(recipe)} });
               recipesList.innerHTML = filteredRecipes.map((recipe) => recipesListTemplate(recipe)).join("");
        break;
        case "ustensiles-list" :
                recipes.filter((recipe) => {if( recipe.ustensils[0].toLowerCase() == valueItem) {filteredUstensil.push(recipe)} });
                recipesList.innerHTML = filteredUstensil.map((recipe) => recipesListTemplate(recipe)).join("");
        break;
        case "ingredients-list":
                recipes.filter((recipe) => {  let hasIngredient = recipe.ingredients.some( ingredient => ingredient['ingredient'].toLowerCase() == valueItem );
                           if  (hasIngredient)   {filteredIngredients.push(recipe)}  })
                recipesList.innerHTML = filteredIngredients.map((recipe) => recipesListTemplate(recipe)).join("");
        break;
       default:
               console.log("rien à afficher") ;
}})}