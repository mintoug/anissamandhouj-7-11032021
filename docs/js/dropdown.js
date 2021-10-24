import { recipes } from "./recipes.js";

/** declaration of variables */
let appliances          = document.querySelector('.appliance-list');
let ustensils           = document.querySelector('.ustensiles-list');
let Ingredients         = document.querySelector('.ingredients-list');
let closeButton         = document.querySelector('.fa-times-circle');
let closeIngr           = document.querySelector('.close-ingredient')
let closeApp            = document.querySelector('.close-appliance')
let closeUstensil       = document.querySelector('.close-ustensil')
let textInput           = document.querySelector('.text-input')
let spanIngredient      = document.querySelector('.ingredient')
let spanAppliance       = document.querySelector('.appliance')
let spanUstensils       = document.querySelector('.ustensil')
let chevronIngredient   = document.querySelector('.chevron-ingredient')
let chevronAppliance    = document.querySelector('.chevron-appliance')
let chevronUstensil     = document.querySelector('.chevron-ustensil')
let inputResult         = document.querySelector('.input-result');
const inputIngredient   = document.querySelector('.button--blue');
const inputAppliance    =  document.querySelector('.button--green');
const inputUsetensils   = document.querySelector('.button--red');
const mainInput         = document.querySelector('.form-control');
const btnIngr           = document.querySelector('.btn-ingredient')
const btnAppliance      = document.querySelector('.btn-appliance')
const btnUstensils      = document.querySelector('.btn-ustensils')
const bodyIngr          = document.getElementById('dropdown-body-Ingredients')
const bodyApp          = document.getElementById('dropdown-body-Appareil')
const bodyUstens         = document.getElementById('dropdown-body-Ustensiles')
/** functions to show items of dropdown-menu */
showAppliances(); 
showUstensils();
showIngredients();

/**to display the drop-down show and hide */
/**for dropdown- ingredients */
chevronIngredient.addEventListener('click', function (){
    if(bodyIngr.style.display =="block"){
   bodyIngr.style.display="none";
   btnIngr.style.width ="12vw";
   }else{bodyIngr.style.display="block";
         btnIngr.style.width ="30vw";}
})         
/**for dropdown-appliances */ 
chevronAppliance.addEventListener('click', function () {
    if(bodyApp.style.display =="block"){
        bodyApp.style.display="none";
        btnAppliance.style.width ="12vw";
        }else{bodyApp.style.display="block";
              btnAppliance.style.width ="30vw";}
})
/**for dropdown-ustensils */
chevronUstensil.addEventListener('click', function () {
        if(bodyUstens.style.display =="block"){
        bodyUstens.style.display="none";
        btnUstensils.style.width ="12vw";
        }else{bodyUstens.style.display="block";
              btnUstensils.style.width ="30vw";}
})

/**close the span where input is written */

closeButton.addEventListener('click', () => {
    textInput.style.visibility = "hidden";
})
closeIngr.addEventListener('click', () => {
    spanIngredient.style.visibility = "hidden";
})
closeApp.addEventListener('click', () => {
    spanAppliance.style.visibility = "hidden";
})
closeUstensil.addEventListener('click', () => {
    spanUstensils.style.visibility = "hidden";
})
/**show the span when input is active */

/**in main search */
mainInput.addEventListener('input', ()=>{
    if(inputIngredient.value.length>2){
    inputResult.innerHTML = mainInput.value;
    textInput.style.visibility = "visible" 
    }
})
/*in ingredient*/
inputIngredient.addEventListener('input', ()=>{
        if(inputIngredient.value.length>2){
            spanIngredient.innerHTML = inputIngredient.value;
            spanIngredient.style.visibility = "visible";
            closeIngr.style.visibility  = "visible";

    }})
/*in appliance*/
inputAppliance.addEventListener('input', ()=>{
    if(inputAppliance.value.length>2){
        spanAppliance.innerHTML = inputAppliance.value;
        spanAppliance.style.visibility = "visible";
        closeApp.style.visibility  ="visible";
    }})
/*in usetensils*/
 inputUsetensils.addEventListener('input', ()=>{
    if(inputUsetensils.value.length>2){
        //activate the span
        spanUstensils.innerHTML = inputUsetensils.value;
        spanUstensils.style.visibility = "visible";
        closeUstensil.style.visibility  ="visible";
    }})
     
/**functions called in the top ,to show evry item in the body of dropdoawn */

function showAppliances(){
    let applianceItems =[];
    for(let i = 0; i < recipes.length; i++){
        applianceItems.push(recipes[i].appliance.toLocaleLowerCase())
    }
    let noDoubleAppliance = applianceItems.filter((item, index)=>applianceItems.indexOf(item)===index).sort()
    for (let k=0; k<noDoubleAppliance.length; k++){
        appliances.innerHTML += `<li class="item" data-value="${noDoubleAppliance[k]}" >${noDoubleAppliance[k]}</li>`;
     }
}

function showUstensils() {
    let ustensilsItem =[];
        for (let i = 0; i < recipes.length; i++) {
    ustensilsItem.push(recipes[i].ustensils[0].toLocaleLowerCase()) }
    let noDoubleUstensils = ustensilsItem.filter((item, index)=>ustensilsItem.indexOf(item)===index).sort()
    for (let k=0; k<noDoubleUstensils.length; k++){   
    ustensils.innerHTML += `<li class="item" data-value='${noDoubleUstensils[k]}'>${noDoubleUstensils[k]}</li>`;
    }
}

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
             Ingredients.innerHTML += `<li class="item" data-value='${noDoubleIngredient[i]}'>${noDoubleIngredient[i]}</li>`; 
    }
}
