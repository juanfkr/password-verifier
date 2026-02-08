import { 
  //hasAtleastFiveLetters, 
  //hasAtleastOneNumber, 
  //hasAtleastOneSpecialChar, 
  //hasUpperCase, 
  passwordTestCharge 
} from "./RegexService.js";

const FORM_INPUT = document.querySelector("#inputName") as HTMLInputElement;
const FORM_BUTTON = document.querySelector("#buttonSubmit") as HTMLButtonElement;

/**
 * valida a senha passada por input
 * @param event evento de submissão do form
 */
function getInputName(event: Event): void {
    event.preventDefault();
    passwordTestCharge(FORM_INPUT.value);
}

FORM_BUTTON.addEventListener("click", (e) => getInputName(e));
