console.log("Hello world!");

let decrementButton = document.getElementById("decrement");
let incrementButton = document.getElementById("increment");
let counterElement = document.getElementById("counter");

decrementButton.addEventListener("click", (event) => {
    console.log("you clicked decrement button");

    const curNum = Number(counterElement.innerHTML);
    if (curNum > 0){
        const newValue = curNum - 1;

        counterElement.innerHTML = newValue;

        if (newValue < 10){
            counterElement.style.color = "black";
        }
    }
});

incrementButton.addEventListener("click", (event) => {
    console.log("you clicked increment button");

    const newValue = Number(counterElement.innerHTML) + 1;
    
    counterElement.innerHTML = newValue;

    if (newValue >= 10) {
        counterElement.style.color = "green";
    }
});