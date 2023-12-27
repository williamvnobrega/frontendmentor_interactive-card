const cardNumber = document.querySelector("#number");
const numberInput = document.querySelector("#card_number");
const cardName = document.querySelector("#name");
const nameInput = document.querySelector("#card_name");
const cardMonth = document.querySelector("#month");
const monthInput = document.querySelector("#card_month");
const cardYear = document.querySelector("#year");
const yearInput = document.querySelector("#card_year");
const cardCvc  = document.querySelector("#cvc");
const cvcInput = document.querySelector("#card_cvc");
const submitButton = document.querySelector("#submit_btn");
const completed = document.querySelector(".completed_state");
const form = document.querySelector("form");



function format(s){
    return s.toString().replace(/\d{4}(?=.)/g, "$&");
}
function setCardNumber(e){
    cardNumber.innerText = format(e.target.value);
}

function setCardName(e){
    cardName.innerText = e.target.value;
}
function setCardMonth(e){
    cardMonth.innerText = e.target.value;
}
function setCardYear(e){
    cardYear.innerText = e.target.value;
}

function setCvcInput(e){
    cvcInput.innerText = e.target.value;
}

numberInput.addEventListener("keyup",setCardNumber);
nameInput.addEventListener("keyup",setCardName);
monthInput.addEventListener("keyup",setCardMonth);
yearInput.addEventListener("keyup",setCardYear);
cvcInput.addEventListener("keyup",setCvcInput);
submitButton.addEventListener("click",handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    if(!nameInput.value){
        nameInput.classList.add("error");
        nameInput.parentElement.classList.add("error_message");
    }else{
        nameInput.classList.remove("error");
        nameInput.parentElement.classList.remove("error_message");
    }
    if(!numberInput.value){
        numberInput.classList.add("error");
        numberInput.parentElement.classList.add("error_message");
    }else{
        numberInput.classList.remove("error");
        numberInput.parentElement.classList.remove("error_message");
    }
    if(!monthInput.value){
        monthInput.classList.add("error");
        monthInput.parentElement.classList.add("error_message");
    }else{
        monthInput.classList.remove("error");
        monthInput.parentElement.classList.remove("error_message");
    }
    if(!yearInput.value){
        yearInput.classList.add("error");
        yearInput.parentElement.classList.add("error_message");
    }else{
        yearInput.classList.remove("error");
        yearInput.parentElement.classList.remove("error_message");
    }
    if(!cvcInput.value){
        cvcInput.classList.add("error");
        cvcInput.parentElement.classList.add("error_message");
    }else{
        cvcInput.classList.remove("error");
        cvcInput.parentElement.classList.remove("error_message");
    }
    if(nameInput.value && numberInput.value && monthInput.value && yearInput.value && cvcInput.value){
        completed.classList.remove('hidden');
        form.classList.add("hidden");
    }
}