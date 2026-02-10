interface Component {
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
    const PARENT = document.querySelector(component.parentComponent) as HTMLElement;
    const HTML_COMPONENT = document.createElement(component.element) as HTMLElement;

    HTML_COMPONENT.textContent = component.text;
    HTML_COMPONENT.setAttribute(component.attribute.type, component.attribute.value);
    PARENT.append(HTML_COMPONENT);
}

