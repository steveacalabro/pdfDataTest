import { SearchAppPage } from './app.po';

describe('search-app App', () => {
  let page: SearchAppPage;

  beforeEach(() => {
    page = new SearchAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
