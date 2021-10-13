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
let filteredUstensil    = [];
let filteredRecipes     =  [];
let filteredIngredients = [];
let tags=[]
/**filter ingredient */

inputAppliance.addEventListener('input' ,() => {
    if (inputAppliance.value.length>2){ 
   tags.push(recipes.filter(appliance =>{ return appliance == inputAppliance.value}).map(recipes=> {return recipes.id}))
   
                    
    }
    console.log(tags) 
})
