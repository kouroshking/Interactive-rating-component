// **************
// Variables
// **************
// the Selected Option for Rating
let selectedOption = null;

// **************
// Functions
// **************
// Give the Rating Options Events
function setOptionsEvents(){
    for (let option of ratingOptions) {
        option.addEventListener("click", function () {

            // reset the active option
            const activeOption = findSelectedOption();
            if (activeOption !== null) {
                activeOption.classList.remove('active');
            }
            selectedOption = null;

            // styling and setting the clicked option to active
            if (!option.classList.contains('active')) {
                // styling the option
                option.classList.add('active');
                // changes the option
                selectedOption = option.dataset.value;
            }
            
        });
    }
}

function ratingOptionClickHandler(option) {
    
}

// finds the active Option
function findSelectedOption() {
    let activeOption = null;
    ratingOptions.forEach(function (option) {
        if (option.classList.contains("active")) {
            activeOption = option;
        }
    });
    return activeOption;
}


function raited() {
     if (selectedOption !== null) {
       // setting the message
       const message = thankingCard.querySelector(".thanking-card__message");
       let messageText = `You selected ${selectedOption} out of 5`;
       message.innerHTML = `<span>${messageText}</span>`;

       // hide the rating card
       ratingCard.classList.add("hide");
       // show the thanking card
       thankingCard.classList.remove("hide");
     } else {
       alert("Please Rate from 1 to 5");
     }
}



// **************
//
// **************
const ratingCard = document.getElementById('rating-card');
const thankingCard = document.getElementById('thanking-card');
const ratingOptions = document.querySelectorAll(
  ".rating-card__options >.rating-card__option"
);
if (ratingOptions) {
  setOptionsEvents();
}

const ratingSubmitBtn = document.querySelector(".rating-card__btn");

if (ratingSubmitBtn) {
    ratingSubmitBtn.addEventListener("click", raited);
}
