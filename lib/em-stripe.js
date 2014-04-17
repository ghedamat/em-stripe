var TokenProxy = Em.ObjectProxy.extend(Em.PromiseProxyMixin);

var EmStripe = Ember.Component.extend({
  isValid: Em.computed.and('cardholderValid', 'dateValid', 'cvcValid', 'numberValid'),

  stripeError: null,

  // NOTE: like Em.computed.readOnly but does not raise when attempted set
  // why? because if this is bound to a DS.Model property bindings will try
  // to set it to null. similar issue with Em.computed.oneWay but sets and
  // causes permanent diverge
  token: Em.computed('_tokenProxy.content', function(key, value){
    this.get('_tokenProxy.content');
  }),

  isLoading: Em.computed.readOnly('_tokenProxy.isPending'),

  _tokenProxy: Em.computed('isValid', 'number', function() {
    if (!this.get('isValid'))
      return

    this.set('stripeError', null);

    var promise = new Em.RSVP.Promise(function(resolve, reject) {
      Stripe.card.createToken({
        name: this.get('cardholder'),
        number: this.get('number'),
        cvc: this.get('cvc'),
        exp_month: this.get('month'),
        exp_year: this.get('year')
      }, function(status, response) {
        if (response.error) {
          this.set('stripeError', response.error.message);
          reject();
        } else {
          resolve(response.id);
        }
      });

     TokenProxy.create({ promise: promise });
    });
  })
})

export default EmStripe;
