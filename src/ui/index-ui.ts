// imports
import { validatePassword } from "../model/password-rules.js";
import { updatePasswordRules } from "./password-hint-ui.js";

// components
const FORM_INPUT = document.querySelector("#inputName") as HTMLInputElement;

// captura a senha, faz a validação e verifica se está dentro das regras
FORM_INPUT.addEventListener("input", (e) => {
    e.preventDefault()

    let password = FORM_INPUT.value;
    let results = validatePassword(password)
    updatePasswordRules(results)
});

console.log("index-ui.ts")