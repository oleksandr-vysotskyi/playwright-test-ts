import { test, expect } from '@playwright/test';
import Login from '../pages/Login.spec.ts'
import { ModalControl } from '../pages/EditProfileModal.spec.ts'

test.describe('User profile photo upload of Hillel QA Auto site', () => {
  test('Photo upload check', async ({ page }) => {
    const modal = new ModalControl(page);
    const login = new Login(page);
    const filePath = 'media/logo1.jpg'

    await login.openProfileTab();
    await modal.openEditProfileModal();
    await modal.uploadPhoto(filePath)
    await modal.confirmAction();
    await modal.waitForSuccessfulPhotoUpload().then((response) => {
      expect(response.status()).toBe(200)
    });
    await expect(modal.successBanner).toBeVisible();
  });
});
