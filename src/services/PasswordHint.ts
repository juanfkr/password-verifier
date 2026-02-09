/**
 * cria um componente e insere no body do HTML
 * 
 * posteriormente será um componente para conter a verificação de senha forte
 * 
 * @param htmlElement elemento html a ser criado (div, p etc)
 */
export function createComponent(htmlElement: string) {
    const body = document.querySelector("body") as HTMLBodyElement;
    const element = document.createElement(htmlElement);
    element.textContent = "teste component";
    body.append(element)

}

export function changeHint(component: HTMLParagraphElement, textHint: string): void {
    component.textContent = textHint
    console.log(component.textContent)
}

