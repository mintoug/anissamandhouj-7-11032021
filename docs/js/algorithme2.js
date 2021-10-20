import {recipes} from './recipes.js'
import { recipeIngredientsListTemplate, recipesListTemplate } from './main.js';


/**variables declaration */
const inputIngredient   = document.querySelector('.button--blue');
const inputAppliance    =  document.querySelector('.button--green');
const inputUsetensils   = document.querySelector('.button--red');
let mainInput           = document.querySelector('.form-control')
let inputResult         = document.querySelector('#input-result')
let recipesList         = document.getElementById('recipes-list');
let textInput           = document.querySelector('.text-input');
let item = document.querySelectorAll('.item')
let mainTags     = []
let ingrTags     = []
let appTags      = []
let ustensilTags = []
/**1/ filter by the main search */
mainInput.addEventListener('input',()=>{ 
    if(mainInput.value.length>2){mainFilter(mainInput);
    
       textInput.style.visibility = "visible";
       recipesList.innerHTML = mainTags.map((recipe) => recipesListTemplate(recipe)).join("");
       if (mainTags == ""){ let error = document.createElement('div');
    error .textContent = " e « Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
    error.className ="error-message";
    document.body.append(error)}
 }}
 
 )
 /**2/ filter in ingredient button */

inputIngredient.addEventListener('input', ()=>{
    if(inputIngredient.value.length>2){mainFilter(inputIngredient);
        textInput.style.visibility = "visible";
        recipesList.innerHTML = mainTags.map((recipe) => recipesListTemplate(recipe)).join("");
        if (mainTags == ""){ let error = document.createElement('div');
    error .textContent = " e « Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
    error.className ="error-message";
    document.body.append(error)}
    }
})

/**3/ filter in appliance button */

inputAppliance.addEventListener('input', ()=>{
    if(inputAppliance.value.length>2){filterAppliances();
      
        recipesList.innerHTML = appTags.map((recipe) => recipesListTemplate(recipe)).join("");
        if (appTags == ""){ let error = document.createElement('div');
    error .textContent = " e « Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
    error.className ="error-message";
    document.body.append(error)}
    }
})
/**4/ filter in ustensils button */
inputUsetensils.addEventListener('input', ()=>{
    if(inputUsetensils.value.length>2){filterUstensils();
       
        recipesList.innerHTML = ustensilTags.map((recipe) => recipesListTemplate(recipe)).join("");
        if (ustensilTags == ""){ let error = document.createElement('div');
    error .textContent = " e « Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
    error.className ="error-message";
    document.body.append(error)}
    }
})
/**5/ filter by selected item in the dropdown */

for (let elt  of item)  { let valueItem = elt.dataset.value.toLowerCase();
       elt.addEventListener('click', () => {
       switch (elt.parentNode.className  )  {
       
       case  "appliance-list":
        recipes.filter((recipe) => { if ( recipe.appliance.toLowerCase() == valueItem) {appTags.push(recipe)} });
       recipesList.innerHTML = appTags.map((recipe) => recipesListTemplate(recipe)).join("");
        break;
       case "ustensiles-list" :
     recipes.filter((recipe) => {if( recipe.ustensils[0].toLowerCase() == valueItem) {ustensilTags.push(recipe)} });
    recipesList.innerHTML = ustensilTags.map((recipe) => recipesListTemplate(recipe)).join("");
        break;
        case "ingredients-list":
    recipes.filter((recipe) => {  let hasIngredient = recipe.ingredients.some( ingredient => ingredient['ingredient'].toLowerCase() == valueItem );
                                if  (hasIngredient)   {mainTags.push(recipe)}  })
    recipesList.innerHTML = mainTags.map((recipe) => recipesListTemplate(recipe)).join("");
       break;
       default:
           console.log("rien à afficher") ;
}})}

/** functions */
function mainFilter(mainInput){
    recipes.filter((recipe)=>{  
        let hasIngredient = recipe.ingredients.some( ingredient => ingredient['ingredient'].toLowerCase() == mainInput.value.toLowerCase() );
        console.log(recipe.ingredients);
        if(hasIngredient){mainTags.push(recipe)}
                          
    }) 
}


function filterAppliances(){
    recipes.filter((recipe) => {if( recipe.appliance.toLowerCase() == inputAppliance.value.toLowerCase()) {appTags.push(recipe)
    }console.log(appTags)})
}

function filterUstensils(){
    recipes.filter((recipe)=>{if(recipe.ustensils[0].toLowerCase() == inputUsetensils.value.toLowerCase()){ustensilTags.push(recipe)
    }}
    )}