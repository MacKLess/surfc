import { SurfcPage } from './app.po';

describe('surfc App', function() {
  let page: SurfcPage;

  beforeEach(() => {
    page = new SurfcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
