emq.globalize();

setResolver(Ember.DefaultResolver.extend({
  testSubjects: {
    'component:em-stripe-cvc': em.stripe.EmStripeCVC,
    'component:em-stripe-input': em.stripe.EmStripeInput
  },
  resolve: function(fullName) {
    return this.testSubjects[fullName] || this._super.apply(this, arguments);
  }
}).create());

Function.prototype.compile = function() {
  var template = this.toString().split('\n').slice(1,-1).join('\n') + '\n';
  return Ember.Handlebars.compile(template);
};

function lookupComponent(id) {
  return Ember.View.views[id];
}

function buildComponent(test, props) {
  props = props || {};
  var component = test.subject(Ember.merge({
    template: function(){/*
  {{em-stripe-cardholder
    class="form-control"
    isValid=cardholderValid
    value=cardholder
    error=cardholderError
    placeholder="Cardholder Name"
    isRequired=isRequired}}
    {{#if cardholderError}}
      Name is invalid
    {{/if}}

  {{em-stripe-number
    class="form-control"
    isValid=numberValid
    value=number
    error=numberError
    placeholder="Card Number"
    isRequired=isRequired}}
    {{#if numberError}}
      Credit Card is Invalid
    {{/if}}

  {{em-stripe-date
    class="form-control"
    isValid=dateValid
    month=month
    year=year
    error=dateError
    placeholder="Expiry"
    isRequired=isRequired}}
    {{#if dateError}}
      Date is Invalid
    {{/if}}

  {{em-stripe-cvc
    class="form-control"
    isValid=cvcValid
    value=cvc
    placeholder="CVC"
    number=number
    error=cvcError
    isRequired=isRequired}}
    {{#if cvcError}}
      CVC is Invalid
    {{/if}}
    */}.compile()
  }, props));
  test.append();
  return component;
}
