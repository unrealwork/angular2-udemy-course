import { browser, element, by } from 'protractor';

export class DebuggingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('debug-root h1')).getText();
  }
}
