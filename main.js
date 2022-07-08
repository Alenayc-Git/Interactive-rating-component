const rating = document.querySelectorAll(".rating-number");
const btnSumbit = document.querySelector("button");
const stateStart = document.querySelector(".state-start");
const thankYouState = document.querySelector(".thank-you-state");
const ratingNumber = document.querySelector("span");

rating.forEach( btn => {
    btn.addEventListener("click", ratingSelected);
})

function ratingSelected(e){
    rating.forEach(btn => {
        btn.classList.remove("rating-selected");
    })
    e.target.classList.add("rating-selected");
    ratingNumber.textContent = e.target.textContent
    console.log(ratingNumber)
}

btnSumbit.addEventListener("click", submitRating)

function submitRating(){
    stateStart.classList.add("hide");
    thankYouState.classList.remove("hide");
}

console.log(btnSumbit);