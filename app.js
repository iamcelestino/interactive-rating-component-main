const rates = document.querySelector(".rating");
const submit = document.querySelector("button");
const span = document.querySelector("span");
const thankState = document.querySelector(".thank__state")

rates.addEventListener("click", (event) => {
    var rate = event.target;
    rate.style.backgroundColor = "hsl(25, 97%, 53%)";
    rate.style.color = "white";
    span.textContent = rate.innerText;
});

submit.addEventListener("click", () => {
    thankState.style.display = "block";
    setTimeout(() => {
        thankState.style.display = "none";  
    }, 3000);
})



