export interface PasswordRules {
    id: string;
    text: string;
    test: (password: string) => boolean
}

export interface PasswordRuleResult {
    id: string;
    text: string;
    isValid: boolean;
}