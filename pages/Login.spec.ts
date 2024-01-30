import { Page, Response } from "@playwright/test";
require('dotenv').config();

export default class Login {
  constructor(private page: Page) {
    this.page = page;
  }

  async loginToSite(): Promise<void> {
    const context = await this.page.context();
    await context.setHTTPCredentials({
      username: process.env.SITE_AUTH_USERNAME!,
      password: process.env.SITE_AUTH_PASSWORD!
    });
    await this.page.goto('/');
  }

  openProfileTab(): Promise<null | Response> {
    return this.page.goto('/panel/profile');
  }
}
