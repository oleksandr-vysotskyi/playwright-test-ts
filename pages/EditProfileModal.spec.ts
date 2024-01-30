import { expect, Page, Locator, Response } from '@playwright/test';

export default class EditProfileModal {
  readonly editProfileButton: Locator;
  readonly photoBrowseInput: Locator;
  readonly saveButton: Locator;
  readonly successBanner: Locator;


  constructor(private page: Page) {
    this.page = page;
    this.editProfileButton = this.page.locator('button.btn-primary');
    this.photoBrowseInput = this.page.locator('input#editProfilePhoto');
    this.saveButton = this.page.locator('div .modal-footer [type="button"]');
    this.successBanner = page.locator(".alert-success");
  }

  async openEditProfileModal(): Promise<void> {
    await this.editProfileButton.click();
  }

  async uploadPhoto(filePath: string | string[]): Promise<void> {
    const input = this.photoBrowseInput;
    await input.setInputFiles(filePath);
  }

  async confirmAction(): Promise<void> {
    await this.saveButton.click();
  }

  async successBannerCheck(): Promise<void> {
    await expect(this.successBanner).toBeVisible();
  }

  async waitForSuccessfulPhotoUpload(): Promise<Response> {
    const response = await this.page.waitForResponse('https://qauto.forstudy.space/api/users/profile');
    return response;
  }
}