import { PASSWORD_RULES } from "../model/password-rules.js";

interface Component {
    id: string;
    element: string;
    text: string;
    attribute: {
        type: string;
        value: string;
    }
    parentComponent: string;
}

/**
 * cria um componente e insere no body do HTML 
 * @param htmlElement elemento html a ser criado (div, p etc)
 */
export function createComponent(component: Component): void {
    if (componentExists(component)) {
        return;
    }

    const PARENT = document.querySelector(component.parentComponent) as HTMLElement;
    const HTML_COMPONENT = document.createElement(component.element) as HTMLElement;

    HTML_COMPONENT.textContent = component.text;
    HTML_COMPONENT.setAttribute("id", component.id)
    HTML_COMPONENT.setAttribute(component.attribute.type, component.attribute.value);
    PARENT.append(HTML_COMPONENT);
}

/**
 * @param component 
 * @returns verifica se componente existe
 */
function componentExists(component: Component): boolean {
    return !!document.querySelector(`#${component.id}`)
}

// renderiza os componentes que exibição de regras
(() => {
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
})();

