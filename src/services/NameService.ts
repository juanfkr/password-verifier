let password = "Joaquim@123";

/**
(?=.*[A-Z]) → pelo menos 1 letra maiúscula
(?=.*\d) → pelo menos 1 número
(?=.*[^A-Za-z0-9]) → pelo menos 1 caractere especial
.{5,} → mínimo de 5 caracteres (ou seja, “mais de 4 letras”)
*/
const rgx: RegExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{5,}$/;

/**
 * 
 * @param password 
 * @returns retorna se a senha possui no min. um caractere maiúsculo
 */
function hasUpperCase(password: string): boolean {
    return /[A-Z]/.test(password);
}

/**
 * 
 * @param password 
 * @returns retorna se a senha possui no min. um número
 */
function hasAtleastOneNumber(password: string): boolean {
    return /\d/.test(password);
}

/**
 * 
 * @param password 
 * @returns retorna se a senha possui no mín. um caractere especial
 */
function hasAtleastOneSpecialChar(password: string): boolean {
    return /[^A-Za-z0-9]/.test(password);
}

/**
 * 
 * @param password 
 * @returns retorna se a senha possui no mín. 5 letras
 */
function hasAtleastFiveLetters(password: string): boolean {
    return /.{5,}/.test(password);
}

function passwordTestCharge(teste: string): void {
    let upperCaseVerifier = hasUpperCase(teste) ? "Possui letra maiúscula" : "Não possui letra maiúscula";
    let numberVerifier = hasAtleastOneNumber(teste) ? "Possui no mín. um número" : "Não possui nenhum número";
    let specialCharVerifier = hasAtleastOneSpecialChar(teste) ? "Possui um caractere especial" : "Não possui um caractere especial";
    let letterCountVerifier = hasAtleastFiveLetters(teste) ? "Possui no mín. 5 letras" : "Não possui no mín. 5 letras";
    
    console.log("\n", upperCaseVerifier, "\n", numberVerifier, "\n", specialCharVerifier, "\n", letterCountVerifier)
}

passwordTestCharge(password);
