import Marionette from 'backbone.marionette';
import App from 'components/App';

const app = new App();

describe('Application', () => {
  it('should starts successfully', () => {
    expect(app).to.be.instanceof(Marionette.Application);
  });
  it('should has app region', () => {
    expect(app.getRegion('app')).to.be.not.undefined;
  });
});