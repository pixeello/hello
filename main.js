button = document.getElementById("button");
label = document.getElementById("label");
let counter = 0;
console.log(button, label);

button.addEventListener("click", ()=>{
    counter++;
    label.textContent = counter;
});
