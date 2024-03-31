import { Page } from '@playwright/test';
import EditProfileModal  from './basePage.spec.ts'

export class ModalControl extends EditProfileModal {

  constructor(page: Page) {
    super(page)
  }

  async openEditProfileModal(): Promise<void> {
    await this.editProfileButtonLoc.click();
  }
}