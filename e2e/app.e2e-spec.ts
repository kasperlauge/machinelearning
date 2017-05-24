import { MachinelearningPage } from './app.po';

describe('machinelearning App', () => {
  let page: MachinelearningPage;

  beforeEach(() => {
    page = new MachinelearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
