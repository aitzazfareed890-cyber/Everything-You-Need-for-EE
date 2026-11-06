import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_PASSCODES,
  verifyAdminPasscode,
} from './adminAuth.ts';

test('DEFAULT_PASSCODES includes 6124', () => {
  assert.ok(DEFAULT_PASSCODES.includes('6124'));
});

test('verifyAdminPasscode validates master passcode 6124', () => {
  assert.equal(verifyAdminPasscode('6124'), true);
  assert.equal(verifyAdminPasscode(' 6124 '), true);
  // Rejects old codes
  assert.equal(verifyAdminPasscode('aitzaz2026'), false);
});

test('verifyAdminPasscode rejects incorrect passcodes', () => {
  assert.equal(verifyAdminPasscode('wrongpassword'), false);
  assert.equal(verifyAdminPasscode(''), false);
  assert.equal(verifyAdminPasscode('12345'), false);
  assert.equal(verifyAdminPasscode('student'), false);
});
