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
let mainTags     = []
let ingrTags     = []
let appTags      = []
let ustensilTags = []
/**1/ filter by the main search */
mainInput.addEventListener('input',()=>{ 
    if(mainInput.value.length>2){mainFilter();
    
       textInput.style.visibility = "visible";
       recipesList.innerHTML = mainTags.map((recipe) => recipesListTemplate(recipe)).join("");
 }})
 /**2/ filter in ingredient button */

inputIngredient.addEventListener('input', ()=>{
    if(inputIngredient.value.length>2){filterIngredients();
       // inputResult.innerHTML = inputIngredient.value;
        textInput.style.visibility = "visible";
        recipesList.innerHTML = ingrTags.map((recipe) => recipesListTemplate(recipe)).join("");
    }
})

/**3/ filter in appliance button */

inputAppliance.addEventListener('input', ()=>{
    if(inputAppliance.value.length>2){filterAppliances();
        //inputResult.innerHTML = inputAppliance.value;
        textInput.style.visibility = "visible";
        recipesList.innerHTML = appTags.map((recipe) => recipesListTemplate(recipe)).join("");
    }
})
/**4/ filter in ustensils button */
inputUsetensils.addEventListener('input', ()=>{
    if(inputUsetensils.value.length>2){filterUstensils();
        //inputResult.innerHTML = inputUsetensils.value;
        textInput.style.visibility = "visible";
        recipesList.innerHTML = ustensilTags.map((recipe) => recipesListTemplate(recipe)).join("");
    }
})

/** functions */
function mainFilter(){
    recipes.filter((recipe)=>{if(recipe.appliance.toLowerCase() == mainInput.value.toLowerCase() || recipe.ingredients.includes(mainInput.value)
        || recipe.ustensils.includes(mainInput.value)) {mainTags.push(recipe)}
                          
    console.log(mainTags)}) 
}

function filterIngredients(){
    recipes.filter((recipe)=>{if(recipe.ingredients.includes(inputIngredient.value)){ingrTags.push(recipe)}})
}

function filterAppliances(){
    recipes.filter((recipe)=>{if(recipe.appliance.toLowerCase() == inputAppliance.value.toLowerCase()){appTags.push(recipe)
    }console.log(appTags)})
}

function filterUstensils(){
    recipes.filter((recipe)=>{if(recipe.ustensils[0].toLowerCase() == inputUsetensils.value.toLowerCase()){ustensilTags.push(recipe)
    }}
    )}