moduleForComponent('em-stripe-cvc');

test('renders', function() {
  expect(2);
  var cvc = this.subject();
  equal(cvc.state, 'preRender');
  this.append();
  equal(cvc.state, 'inDOM');
});

test('isValid', function() {
  expect(4);
  var input = this.subject();
  equal(input.get('isValid'), false);
  input.set('number', '4242424242424242');
  equal(input.get('isValid'), false);
  input.set('value', '22');
  equal(input.get('isValid'), false);
  input.set('value', '220');
  equal(input.get('isValid'), true);
});
