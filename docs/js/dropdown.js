import { recipes } from "./recipes.js";

/** declaratio of variables */
let appliances          = document.querySelector('.appliance-list');
let ustensils           = document.querySelector('.ustensiles-list');
let Ingredients         = document.querySelector('.ingredients-list');
let closeButton         = document.querySelector('.fa-times-circle');
let textInput           = document.querySelector('.text-input')
let textInputIngr       = document.querySelector('.ingredient')
let textInputAppl       = document.querySelector('.appliance')
let textInputUstens     = document.querySelector('.ustensil')
let item                = document.querySelectorAll('.item')
let spanIngredient      = document.querySelector('.ingredient')
let spanAppliance       = document.querySelector('.appliance')
let spanUstensils       = document.querySelector('.ustensils')
let chevronIngredient   = document.querySelector('.chevron-ingredient')
let chevronAppliance    = document.querySelector('.chevron-appliance')
let chevronUstensil     = document.querySelector('.chevron-ustensil')
let inputResult         = document.querySelector('.input-result');
const inputIngredient   = document.querySelector('.button--blue');
const inputAppliance    =  document.querySelector('.button--green');
const inputUsetensils   = document.querySelector('.button--red');
const mainInput         = document.querySelector('.form-control');
const menuD             = document.querySelector('.menu-d')
let dropdownBody        = document.querySelectorAll('.dropdown-body')
let dropdownHead        = document.querySelectorAll('.dropdown-head')
const bodyIngr          = document.getElementById('dropdown-body-Ingredients')
const bodyApp          = document.getElementById('dropdown-body-Appareil')
const bodyUstens         = document.getElementById('dropdown-body-Ustensiles')
/** functions to show items of dropdown-menu */
showAppliances(); 
showUstensils();
showIngredients();

/**display the drop-down */
chevronIngredient.addEventListener('click', () => {
    if(bodyIngr.style.display = "none"){
bodyIngr.style.display = "block";}
})
chevronAppliance.addEventListener('click', () => {
    if(bodyApp.style.display = "none"){
bodyApp.style.display = "block";}
})
chevronUstensil.addEventListener('click', () => {
    if(bodyUstens.style.display = "none"){
bodyUstens.style.display = "block";}
})

/**THE span when input is written */
 
closeButton.addEventListener('click', () => {
    textInput.style.visibility = "hidden"
})
/**in main search */
mainInput.addEventListener('input', ()=>{
    inputResult.innerHTML = mainInput.value;
        textInput.style.visibility = "visible" 
})

/**on click on th items */  
item.forEach(elt => {     
elt.addEventListener('click', () =>{
    inputResult.innerHTML = elt.options[elt.selectedIndex].value;
    console.log(inputResult.innerHTML)

        textInput.style.visibility = "visible" })})
/*in ingredient*/
inputIngredient.addEventListener('input', ()=>{
        if(inputIngredient.value.length>2){
            spanIngredient.innerHTML = inputIngredient.value;
                   textInputIngr.style.visibility = "visible";}})
/*in appliance*/
inputAppliance.addEventListener('input', ()=>{
    if(inputAppliance.value.length>2){
        spanAppliance.innerHTML = inputAppliance.value;
        textInputAppl.style.visibility = "visible";}})
/*in usetensils*/
 inputUsetensils.addEventListener('input', ()=>{
    if(inputUsetensils.value.length>2){
        //activate the span
        spanUstensils.innerHTML = inputUsetensils.value;
        textInput.style.visibility = "visible";}})
     


function showAppliances(){
    let applianceItems =[];
    for(let i = 0; i < recipes.length; i++){
        applianceItems.push(recipes[i].appliance.toLocaleLowerCase())
    }
    let noDoubleAppliance = applianceItems.filter((item, index)=>applianceItems.indexOf(item)===index).sort()
    for (let k=0; k<noDoubleAppliance.length; k++){
        appliances.innerHTML += `<li class="item" value="${noDoubleAppliance[k]}" >${noDoubleAppliance[k]}</li>`;
 


    }
}

function showUstensils() {
    let ustensilsItem =[];
        for (let i = 0; i < recipes.length; i++) {
    ustensilsItem.push(recipes[i].ustensils[0].toLocaleLowerCase()) }
    let noDoubleUstensils = ustensilsItem.filter((item, index)=>ustensilsItem.indexOf(item)===index).sort()
    for (let k=0; k<noDoubleUstensils.length; k++){   
    ustensils.innerHTML += `<li class="item" value='${noDoubleUstensils[k]}'>${noDoubleUstensils[k]}</li>`;
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
             Ingredients.innerHTML += `<li class="item" value='${noDoubleIngredient[i]}'>${noDoubleIngredient[i]}</li>`; 
        }
    
    }
