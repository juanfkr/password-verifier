import { PasswordRuleResult } from "../interfaces/password-interface";


export function updatePasswordRules(results: PasswordRuleResult[]) {
  results.forEach(result => {
    const el = document.getElementById(result.id);

    if (!el) return;

    el.className = result.isValid
      ? "text-success"
      : "text-danger";
  });
}
