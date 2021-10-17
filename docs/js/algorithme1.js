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
let filteredRecipes     =  [];
let filteredIngredients = [];

/**listen to the input
/*show the inputs in the span of the top
/*call to function displaying recipes*/


/** search ingredients in the main bar of serach */
mainInput.addEventListener('input', ()=>{
    if(mainInput.value.length>2){
    inputResult.innerHTML = mainInput.value;
       textInput.style.visibility = "visible";
         filterRecipesIngredients(mainInput);
         recipesList.innerHTML = filteredIngredients.map((recipe) => recipesListTemplate(recipe)).join("");
         }
        })

 /**search by clicking on the item in dropdown-body */
 /*1. for ingredients*/
 for (let elt  of item)  { let valueItem = elt.dataset;
    elt.addEventListener('click', () => {
        filterRecipesIngredients(valueItem);
      recipesList.innerHTML = filteredIngredients.map((recipe) => recipesListTemplate(recipe)).join("");}
     
    )}
/*2. for appliance*/
for (let elt  of item)  { let valueItem = elt.dataset;
    elt.addEventListener('click', () => {
        filterRecipesAppliance(valueItem);
      recipesList.innerHTML = filteredRecipes.map((recipe) => recipesListTemplate(recipe)).join("");}
     
    )}
/*3. in ustensils */
for (let elt  of item)  { let valueItem = elt.dataset;
    elt.addEventListener('click', () => {
        filterRecipesUstensils (valueItem);
      recipesList.innerHTML = filteredUstensil.map((recipe) => recipesListTemplate(recipe)).join("");}
     
    )}
/**in ingrdient*/
inputIngredient.addEventListener('input', ()=>{
   if(inputIngredient.value.length>2){
       inputResult.innerHTML = inputIngredient.value;
         
         filterRecipesIngredients(inputIngredient);
         recipesList.innerHTML = filteredIngredients.map((recipe) => recipesListTemplate(recipe)).join(""); 
          
    }
});
/*in appliance*/
inputAppliance.addEventListener('input', ()=>{
    if(inputAppliance.value.length>2){
        inputResult.innerHTML = inputAppliance.value;
        filterRecipesAppliance(inputAppliance);
        recipesList.innerHTML = filteredRecipes.map((recipe) => recipesListTemplate(recipe)).join("");
        }
 });
 
 
/*in usetensils*/
 inputUsetensils.addEventListener('input', ()=>{
    if(inputUsetensils.value.length>2){
        inputResult.innerHTML = inputUsetensils.value;
        filterRecipesUstensils(inputUsetensils);
        recipesList.innerHTML = filteredUstensil.map((recipe) => recipesListTemplate(recipe)).join("");
     }
 });

/**the functions to filter recipes  */
/**filter the appliances */
 function filterRecipesAppliance(inputAppliance){

  for (let i=0 ; i<recipes.length ; i++){
      
   if(recipes[i].appliance.toLowerCase() == inputAppliance.value.toLowerCase()){
       //test if recipes exists  yet 
       if(!filteredRecipes.includes(recipes[i])){
      filteredRecipes.push(recipes[i]);
       }
     }
    }
    console.log(filteredRecipes); 
    }
  
 /**filter ustensils */
 
function filterRecipesUstensils(inputUsetensils){
  let ustensilsTable = []
  for (let l=0;l<recipes.length;l++){
    ustensilsTable.push(recipes[l].ustensils)
  
  for(let i=0; i<ustensilsTable.length; i++){
         for (let elt in ustensilsTable[i]){
             if(ustensilsTable[i][elt].toLowerCase() == inputUsetensils.value.toLowerCase()){
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
 