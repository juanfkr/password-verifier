
interface PasswordRuleResult {
  id: string;
  text: string;
  isValid: boolean;
}


export function updateUI(results: PasswordRuleResult[]) {
  results.forEach(result => {
    const el = document.getElementById(result.id);

    if (!el) return;

    el.className = result.isValid
      ? "text-success"
      : "text-danger";
  });
}
