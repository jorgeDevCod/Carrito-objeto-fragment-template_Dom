const imputColor = document.querySelector("#imputColor");
const btnView = document.querySelector("#btnView");
const parrafoExa = document.querySelector("#parrafoExa");
const cardColor = document.querySelector("#cardColor");

btnView.addEventListener("click", () =>{
    console.log("has dado click");
    console.log(imputColor.value);
    console.log(cardColor.style);
    parrafoExa.textContent = imputColor.value;
    cardColor.style.backgroundColor = imputColor.value;
    
    navigator.clipboard
        .writeText(imputColor.value)
        .then(() => console.log("codigo copiado"))
        .catch((e) => console.log(e));
})




// console.log(imputColor)
// console.log(btnView)
// console.log(parrafoExa)
// console.log(cardColor)
