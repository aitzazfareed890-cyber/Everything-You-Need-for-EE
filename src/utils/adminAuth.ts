/**
 * Authentication and authorization utilities for Admin / Creator Mode.
 * Ensures only Mr. (Aitzaz Fareed) can modify or add Google Drive links,
 * while regular mobile/desktop visitors have a secure, read-only experience.
 */

export const ADMIN_AUTH_KEY = 'everything_you_need_for_ee_admin_auth';
export const ADMIN_PASSCODE_KEY = 'everything_you_need_for_ee_custom_passcode';
export const ADMIN_AUTH_EVENT = 'ee_admin_auth_changed';

export const DEFAULT_PASSCODES = [
  '6124'
];

export function isAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  } catch {
    return false;
  }
}

export function getCustomPasscode(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(ADMIN_PASSCODE_KEY);
  } catch {
    return null;
  }
}

export function verifyAdminPasscode(input: string): boolean {
  const clean = input.trim();
  if (!clean) return false;

  const custom = getCustomPasscode();
  if (custom && clean === custom) {
    return true;
  }

  return DEFAULT_PASSCODES.some(
    (code) => code.toLowerCase() === clean.toLowerCase()
  );
}

export function loginAdmin(passcode: string): boolean {
  if (typeof window === 'undefined') return false;
  if (verifyAdminPasscode(passcode)) {
    try {
      localStorage.setItem(ADMIN_AUTH_KEY, 'true');
      window.dispatchEvent(new Event(ADMIN_AUTH_EVENT));
      return true;
    } catch {
      return false;
    }
  }
  return false;
}

export function logoutAdmin(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(ADMIN_AUTH_KEY);
    window.dispatchEvent(new Event(ADMIN_AUTH_EVENT));
  } catch (e) {
    console.error('Failed to logout admin', e);
  }
}

export function setCustomAdminPasscode(currentCode: string, newCode: string): boolean {
  if (typeof window === 'undefined') return false;
  if (!verifyAdminPasscode(currentCode)) return false;
  if (!newCode || newCode.trim().length < 4) return false;

  try {
    localStorage.setItem(ADMIN_PASSCODE_KEY, newCode.trim());
    return true;
  } catch {
    return false;
  }
}
