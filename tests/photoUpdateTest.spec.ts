import { test, expect } from '@playwright/test';
import EditModal from '../pages/EditProfileModal.spec.ts';
import Login from '../pages/Login.spec.ts'

test.describe('User profile photo upload of Hillel QA Auto site', () => {
  test('Photo upload check', async ({ page }) => {
    const editModal = new EditModal(page);
    const login = new Login(page);
    const filePath = 'media/logo1.jpg'

    await login.openProfileTab();
    await editModal.openEditProfileModal();
    await editModal.uploadPhoto(filePath)
    await editModal.confirmAction();
    await editModal.waitForSuccessfulPhotoUpload().then((response) => {
      expect(response.status()).toBe(200)
    });
    await expect(editModal.successBanner).toBeVisible();
  });
});
