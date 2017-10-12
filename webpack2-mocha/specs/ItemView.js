import ItemView from 'components/ItemView';

const fixtures = {
  brunch: 'https://webpack.github.io/xxx',
  Mn: 'http://marionettejs.com/'
};
let itemView;
let links;

describe('ItemView', () => {
  before(() => {
    itemView = new ItemView();
    itemView.render();
    links = itemView.$el.find('a');
  });

  it('should has Brunch link', () => {
    expect($(links[0]).attr('href')).to.be.equal(fixtures.brunch);
  });

  it('should has Marionette link', () => {
    expect($(links[1]).attr('href')).to.be.equal(fixtures.Mn);
  });
});
