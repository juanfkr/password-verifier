// imports
import { createComponent } from "../services/Hint.js";

// components
const FORM_INPUT = document.querySelector("#inputName") as HTMLInputElement;

function getPassword(input: HTMLInputElement): string {
    return input.value
}

function insertComponents(warns: string[]) {
    var n: number = 0;

    warns.forEach((warn) => {
        n++;
        createComponent({
            id: `componentId-${n}`,
            element: "div",
            text: `${warn}`,
            attribute: {
                type: "class",
                value: "text-danger text-center"
            },
            parentComponent: "#warning-list"
        })
    })
}

FORM_INPUT.addEventListener("input", (e) => {
    e.preventDefault()

    getPassword(FORM_INPUT)
});
