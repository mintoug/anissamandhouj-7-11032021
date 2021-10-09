import { recipes } from "./recipes.js";

/** declaratio of variables */
let appliances   = document.querySelector('.appliance-list');
let ustensils    = document.querySelector('.ustensiles-list');
let Ingredients  = document.querySelector('.ingredients-list');
let closeButton  = document.querySelector('.fa-times-circle');
let textInput    = document.querySelector('.text-input')




/** functions to show items of dropdown-menu */
showAppliances(); 
showUstensils();
showIngredients();
 
closeButton.addEventListener('click', () =>{
    textInput.style.visibility="hidden"
})

function showAppliances(){
    let applianceItems =[];
    for(let i = 0; i < recipes.length; i++){
        applianceItems.push(recipes[i].appliance.toLocaleLowerCase())
    }
    let noDoubleAppliance = applianceItems.filter((item, index)=>applianceItems.indexOf(item)===index).sort()
    for (let k=0; k<noDoubleAppliance.length; k++){
        appliances.innerHTML += `<li class="item">${noDoubleAppliance[k]}</li>`;
    }
}

function showUstensils() {
    let ustensilsItem =[];
        for (let i = 0; i < recipes.length; i++) {
    ustensilsItem.push(recipes[i].ustensils[0].toLocaleLowerCase()) }
    let noDoubleUstensils = ustensilsItem.filter((item, index)=>ustensilsItem.indexOf(item)===index).sort()
    for (let k=0; k<noDoubleUstensils.length; k++){   
    ustensils.innerHTML += `<li>${noDoubleUstensils[k]}</li>`;
}}

function showIngredients() {
    let ingredientArray=[]; let ingredientItem=[];
    for (let j = 0; j < recipes.length; j++) {
         ingredientArray.push(recipes[j].ingredients);}
      //  console.log(ingredientArray)
   for(let elt in ingredientArray){
       for(let k=0; k<ingredientArray[elt].length;k++){
             let item = ingredientArray[elt][k].ingredient;
             ingredientItem.push(item.toLowerCase()); } }         
          // console.log(ingredientItem)
        let noDoubleIngredient = ingredientItem.filter((item, index)=>ingredientItem.indexOf(item)===index).sort();
        for (let i = 0; i < noDoubleIngredient.length; i++) {       
             Ingredients.innerHTML += `<li>${noDoubleIngredient[i]}</li>`; 
        }
    
    }



 
