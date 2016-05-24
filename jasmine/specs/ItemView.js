import ItemView from 'components/ItemView';

const fixtures = {
  brunch: 'http://brunch.io',
  Mn: 'http://marionettejs.com/'
};
let itemView;
let links;

describe('ItemView', () => {
  beforeAll(() => {
    itemView = new ItemView();
    itemView.render();
    links = itemView.$el.find('a');
  });

  it('should has Brunch link', () => {
    expect($(links[0]).attr('href')).toEqual(fixtures.brunch);
  });

  it('should has Marionette link', () => {
    expect($(links[1]).attr('href')).toEqual(fixtures.Mn);
  });
});