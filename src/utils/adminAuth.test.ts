import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_PASSCODES,
  verifyAdminPasscode,
} from './adminAuth.ts';

test('DEFAULT_PASSCODES includes aitzaz2026 and creator email', () => {
  assert.ok(DEFAULT_PASSCODES.includes('aitzaz2026'));
  assert.ok(DEFAULT_PASSCODES.includes('aitzazfareed890@gmail.com'));
});

test('verifyAdminPasscode validates known master passcodes case-insensitively', () => {
  assert.equal(verifyAdminPasscode('aitzaz2026'), true);
  assert.equal(verifyAdminPasscode('AITZAZ2026'), true);
  assert.equal(verifyAdminPasscode('aitzazfareed890@gmail.com'), true);
  assert.equal(verifyAdminPasscode('ee2026'), true);
  assert.equal(verifyAdminPasscode('admin'), true);
});

test('verifyAdminPasscode rejects incorrect passcodes', () => {
  assert.equal(verifyAdminPasscode('wrongpassword'), false);
  assert.equal(verifyAdminPasscode(''), false);
  assert.equal(verifyAdminPasscode('12345'), false);
  assert.equal(verifyAdminPasscode('student'), false);
});
