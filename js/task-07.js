const sizeControl = document.querySelector("#font-size-control");
const fontSize = document.querySelector("#text");

console.log(sizeControl);
sizeControl.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);
    text.style.fontSize = sizeControl.value + "px";
});