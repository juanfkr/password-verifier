// imports
import { createComponent } from "./Hint.js";

// components
const FORM_INPUT = document.querySelector("#inputName") as HTMLInputElement;
const FORM_BUTTON = document.querySelector("#buttonSubmit") as HTMLButtonElement;

const numbers: number[] = [1, 2, 3, 4];

FORM_BUTTON.addEventListener("click", (e) => {
    e.preventDefault()
    numbers.forEach((number) => {
        createComponent({
            element: "div",
            text: `${number}`,
            attribute: {
                type: "class",
                value: "text-primary"
            },
            parentComponent: "#warning-list"
        })
    })

});
