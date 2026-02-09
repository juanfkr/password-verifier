import { 
  //hasAtleastFiveLetters, 
  //hasAtleastOneNumber, 
  //hasAtleastOneSpecialChar, 
  //hasUpperCase, 
  passwordTestCharge 
} from "./RegexService.js";

import { changeHint, createComponent } from "./PasswordHint.js";

const FORM_INPUT = document.querySelector("#inputName") as HTMLInputElement;
const FORM_BUTTON = document.querySelector("#buttonSubmit") as HTMLButtonElement;

function getInputName(): void {
    passwordTestCharge(FORM_INPUT.value);
}

let uListElement = document.querySelector("#ulist-test") as HTMLParagraphElement

FORM_BUTTON.addEventListener("click", (e) => {
    e.preventDefault()
    getInputName()
    //changeHint(uListElement, passwordTestCharge(FORM_INPUT.value));
    createComponent("p")
});
