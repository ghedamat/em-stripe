import EmStripeInput from './em-stripe-input';
//import ignoreSet from 'appkit/utils/em-computed-ignore-set'

var EmStripeCVC = EmStripeInput.extend({
  subComponentName: 'cvc',

  didInsertElement: function(){
    this.$().payment('formatCardCVC');
  },

  cardType: Em.computed('number', function(k,v){
    $.payment.cardType(this.get('number'));
  }),

  isValid: Em.computed('value', 'cardType', function(k,v){
    $.payment.validateCardCVC(this.get('value'), this.get('cardType'));
  })
});

export default EmStripeCVC;
