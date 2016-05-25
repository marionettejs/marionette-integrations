import Marionette from 'backbone.marionette';
import App from 'components/App';

let app;

describe('Application', () => {
  beforeAll(() => {
    app = new App();
  });

  it('should starts successfully', () => {
    expect(app instanceof Marionette.Application).toBeTruthy();
  });
  
  it('should has app region', () => {
    expect(app.getRegion('app')).not.toEqual(undefined);
  });
});