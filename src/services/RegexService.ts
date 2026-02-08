/**
(?=.*[A-Z]) → pelo menos 1 letra maiúscula
(?=.*\d) → pelo menos 1 número
(?=.*[^A-Za-z0-9]) → pelo menos 1 caractere especial
.{5,} → mínimo de 5 caracteres (ou seja, “mais de 4 letras”)
*/

let password = "test";

/**
 * 
 * @param password 
 * @returns retorna se a senha possui no min. um caractere maiúsculo
 */
export function hasUpperCase(password: string): boolean {
    return /[A-Z]/.test(password);
}

/**
 * 
 * @param password 
 * @returns retorna se a senha possui no min. um número
 */
export function hasAtleastOneNumber(password: string): boolean {
    return /\d/.test(password);
}

/**
 * 
 * @param password 
 * @returns retorna se a senha possui no mín. um caractere especial
 */
export function hasAtleastOneSpecialChar(password: string): boolean {
    return /[^A-Za-z0-9]/.test(password);
}

/**
 * 
 * @param password 
 * @returns retorna se a senha possui no mín. 5 letras
 */
export function hasAtleastFiveLetters(password: string): boolean {
    return /.{5,}/.test(password);
}

export function passwordTestCharge(teste: string): void {
    let errors: Object[] = []

    let upperCaseVerifier: string = hasUpperCase(teste) ? "Possui letra maiúscula" : "Não possui letra maiúscula";
    let numberVerifier: string = hasAtleastOneNumber(teste) ? "Possui no mín. um número" : "Não possui nenhum número";
    let specialCharVerifier: string = hasAtleastOneSpecialChar(teste) ? "Possui um caractere especial" : "Não possui um caractere especial";
    let letterCountVerifier: string = hasAtleastFiveLetters(teste) ? "Possui no mín. 5 letras" : "Não possui no mín. 5 letras";
    
    console.log("\n", upperCaseVerifier, "\n", numberVerifier, "\n", specialCharVerifier, "\n", letterCountVerifier)
}
