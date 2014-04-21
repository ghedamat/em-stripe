moduleForComponent('em-stripe-input');

test('starts with error false', function() {
  expect(1);
  var input = this.subject();
  this.append();
  equal(input.get('error'), false);
});

test('isEntered is set on focus in/out', function() {
  expect(3);
  var input = this.subject();
  this.append();
  equal(input.get('isEntered'), undefined);
  Em.run(function(){
    input.$().trigger('focusin');
  });
  equal(input.get('isEntered'), false);
  Em.run(function(){
    input.$().trigger('focusout');
  });
  equal(input.get('isEntered'), true);
});

