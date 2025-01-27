const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
 const dropdowns = document.querySelectorAll("select");
 const button = document.querySelector("button");
 const fromCurr = document.querySelector(".from select");
 const toCurr = document.querySelector(".to select");
 const msg = document.querySelector(".upperbottom p")
 for(let select of dropdowns){
  for(let currCode in countryList){
    let newOption = document.createElement("option");
newOption.innerText = currCode;
newOption.value = currCode;
select.append(newOption);
if(select.name==="from" && currCode==="INR"){
  newOption.selected = "selected";
}
 else if(select.name==="to" && currCode==="BDT"){
  newOption.selected = "selected";
}
  }
  select.addEventListener("change",(evt)=>{
    flagChange(evt.target);
  })
 }

 const flagChange = (element)=>{
  let elementData = element.value;
let countryCode = countryList[elementData];
  let url = `https://flagsapi.com/${countryCode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src = url;
 }
 button.addEventListener("click", async(evt)=>{
  evt.preventDefault();
  let amount = document.querySelector("input");
  let amtVal = amount.value;
  if(amtVal==="" || amtVal<="1"){
    amtVal = 1;
    amount.value = 1;
  }
 
   //api has been changed
   //  const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}`;//
   
 let response = await fetch(url);
let data = await response.json();
let rate = data[toCurr.value.toLowerCase()];
let finalAmount = amtVal * rate;
 msg.innerText =  `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
 })