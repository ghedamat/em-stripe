moduleForComponent('em-stripe-cvc');

test('renders', function() {
  expect(2);
  var cvc = this.subject();
  equal(cvc.state, 'preRender');
  this.append();
  equal(cvc.state, 'inDOM');
});
