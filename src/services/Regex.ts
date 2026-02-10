/**
(?=.*[A-Z]) → pelo menos 1 letra maiúscula
(?=.*\d) → pelo menos 1 número
(?=.*[^A-Za-z0-9]) → pelo menos 1 caractere especial
.{5,} → mínimo de 5 caracteres (ou seja, “mais de 4 letras”)
*/

export function hasUpperCase(password: string): boolean {
    return /[A-Z]/.test(password);
}

export function hasAtleastOneNumber(password: string): boolean {
    return /\d/.test(password);
}

export function hasAtleastOneSpecialChar(password: string): boolean {
    return /[^A-Za-z0-9]/.test(password);
}

export function hasAtleastFiveLetters(password: string): boolean {
    return /.{5,}/.test(password);
}
