import { ServicesPage } from './app.po';

describe('services App', () => {
  let page: ServicesPage;

  beforeEach(() => {
    page = new ServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('serv works!');
  });
});
