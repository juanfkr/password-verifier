/**
(?=.*[A-Z]) → pelo menos 1 letra maiúscula
(?=.*\d) → pelo menos 1 número
(?=.*[^A-Za-z0-9]) → pelo menos 1 caractere especial
.{5,} → mínimo de 5 caracteres (ou seja, “mais de 4 letras”)
*/

interface PasswordRules {
    id: string;
    text: string;
    test: (password: string) => boolean
}

export const PASSWORD_RULES: PasswordRules[] = [
    {
        id: "upperCase",
        text: "Ao menos uma letra maiúscula",
        test: (password: string) => /[A-Z]/.test(password)
    },
    {
        id: "number",
        text: "Ao menos um número",
        test: (password: string) => /\d/.test(password)
    },
    {
        id: "specialChar",
        text: "Ao menos um caractere especial",
        test: (password: string) => /[^A-Za-z0-9]/.test(password)
    },
    {
        id: "fiveChars",
        text: "Ao menos 5 letras",
        test: (password: string) => password.length >= 5
    },
]