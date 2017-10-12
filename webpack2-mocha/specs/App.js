import Marionette from 'backbone.marionette';
import App from 'components/App';

let app;

describe('Application', () => {
  before(() => {
    app = new App();
  });

  it('should starts successfully', () => {
    expect(app).to.be.instanceof(Marionette.Application);
  });

  it('should has app region', () => {
    expect(app.getRegion('app')).to.be.not.undefined;
  });
});
