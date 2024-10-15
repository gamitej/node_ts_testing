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

    this.checkForLength(password, reasons);
    this.checkForUppercase(password, reasons);
    this.checkForLowercase(password, reasons);

    return {
      valid: reasons.length > 0 ? false : true,
      reasons: reasons,
    };
  }

  private checkForLength(password: string, reasons: PasswordErrors[]) {
    if (password.length < 8) reasons.push(PasswordErrors.SHORT);
  }

  private checkForUppercase(password: string, reasons: PasswordErrors[]) {
    if (password === password.toLowerCase())
      reasons.push(PasswordErrors.NO_UPPER_CASE);
  }

  private checkForLowercase(password: string, reasons: PasswordErrors[]) {
    if (password === password.toUpperCase())
      reasons.push(PasswordErrors.NO_LOWER_CASE);
  }
}
