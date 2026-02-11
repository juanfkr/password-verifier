// imports
import { createComponent } from "./Hint.js";
import { validatePassword, PASSWORD_RULES } from "../model/Rules.js";
import { updateUI } from "./HintUi.js";

// components
const FORM_INPUT = document.querySelector("#inputName") as HTMLInputElement;

function getPassword(input: HTMLInputElement): string {
    return input.value
}

function renderRules() {
    PASSWORD_RULES.forEach((rule) => {
        createComponent({
            id: rule.id,
            element: "div",
            text: rule.text,
            attribute: {
                type: "class",
                value: "text-danger",
            },
            parentComponent: "#warning-list"
        })
    })
}

FORM_INPUT.addEventListener("input", (e) => {
    e.preventDefault()

    let password = getPassword(FORM_INPUT);
    let results = validatePassword(password)
    updateUI(results)
    console.log(results)
});

renderRules()