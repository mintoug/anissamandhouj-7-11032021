import {recipesListTemplate, recipeIngredientsListTemplate} from "./main.js";
import { recipes } from "./recipes.js";

/** variables*/
const inputIngredient   = document.querySelector('.button--blue');
const inputAppliance    =  document.querySelector('.button--green');
const inputUsetensils   = document.querySelector('.button--red');
let inputResult         = document.querySelector('.input-result');
let mainInput           = document.querySelector('.form-control');
let recipesList         = document.getElementById('recipes-list');
let textInput           = document.querySelector('.text-input')
let filteredUstensil    = [];
let filteredRecipes     =  [];
let filteredIngredients = [];

/**listen to the input
/*show the inputs in the span of the top
/*call to function displaying recipes*/

mainInput.addEventListener('change', ()=>{
    inputResult.innerHTML = mainInput.value;
       textInput.style.visibility = "visible";
         filterRecipesIngredients(mainInput);
         recipesList.innerHTML = filteredIngredients.map((recipe) => recipesListTemplate(recipe)).join("");
         }
)

/**in ingrdient*/
inputIngredient.addEventListener('input', ()=>{
   if(inputIngredient.value.length>2){
       inputResult.innerHTML = inputIngredient.value;
              textInput.style.visibility = "visible";
         filterRecipesIngredients(inputIngredient);
         recipesList.innerHTML = filteredIngredients.map((recipe) => recipesListTemplate(recipe)).join(""); 
          
    }
});
/*in appliance*/
inputAppliance.addEventListener('input', ()=>{
    if(inputAppliance.value.length>2){
        inputResult.innerHTML = inputAppliance.value;
        textInput.style.visibility = "visible";
        filterRecipesAppliance(inputAppliance);
            recipesList.innerHTML = filteredRecipes.map((recipe) => recipesListTemplate(recipe)).join("");
        }
 });

/*in usetensils*/
 inputUsetensils.addEventListener('input', ()=>{
    if(inputUsetensils.value.length>2){
        //activate the span
        inputResult.innerHTML = inputUsetensils.value;
        textInput.style.visibility="visible";
        //function to filter
         filterRecipesUstensils(inputUsetensils);
         //show the recipes filtered
         recipesList.innerHTML = filteredUstensil.map((recipe) => recipesListTemplate(recipe)).join("");
     }
 });

/**the functions to filter recipes  */
/**filter the appliances */
 function filterRecipesAppliance(){

  for (let i=0 ; i<recipes.length ; i++){
      
   if(recipes[i].appliance.toLowerCase() == inputResult.innerHTML.toLowerCase()){
       //test if recipes exists  yet 
       if(!filteredRecipes.includes(recipes[i])){
      filteredRecipes.push(recipes[i]);
       }
     }
    }
    console.log(filteredRecipes); 
    }
  
 /**filter ustensils */
 
function filterRecipesUstensils(){
  let ustensilsTable = []
  for (let l=0;l<recipes.length;l++){
    ustensilsTable.push(recipes[l].ustensils)
  
  for(let i=0; i<ustensilsTable.length; i++){
         for (let elt in ustensilsTable[i]){
             if(ustensilsTable[i][elt].toLowerCase() == inputResult.innerHTML.toLowerCase()){
      if (!filteredUstensil.includes(recipes[l])){
      filteredUstensil.push(recipes[l])}
     }
    
    }
    }
    }
    console.log(filteredUstensil)
 } 

/**filter ingredients */

 function filterRecipesIngredients(inputIngredient){
 
    for(let i=0; i<recipes.length; i++){
        let tableIngredientsDetails = recipes[i].ingredients;
        
        for(let n in tableIngredientsDetails ){
            
            let tableIngredients = tableIngredientsDetails[n].ingredient.toLowerCase();
        
       if (tableIngredients == inputIngredient.value.toLowerCase()){
        
          filteredIngredients.push(recipes[i]);
          
    }
}
}console.log(filteredIngredients)

 }
 