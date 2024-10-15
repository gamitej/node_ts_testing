export enum PasswordErrors {
  SHORT = "Password must be at least",
  NO_UPPER_CASE = "Upper case letters required",
  NO_LOWER_CASE = "Lower case letters required",
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];

    if (password.length < 8) reasons.push(PasswordErrors.SHORT);

    // to check no uppercase
    if (password === password.toLowerCase())
      reasons.push(PasswordErrors.NO_UPPER_CASE);

    // to check no lowercase
    if (password === password.toUpperCase())
      reasons.push(PasswordErrors.NO_LOWER_CASE);

    return {
      valid: reasons.length > 0 ? false : true,
      reasons: reasons,
    };
  }
}
