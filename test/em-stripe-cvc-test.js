moduleForComponent('em-stripe-cvc');

test('renders', function() {
  expect(2);
  var modal = this.subject();
  equal(modal.state, 'preRender');
  this.append();
  equal(modal.state, 'inDOM');
});
