import EmStripeInput from './em-stripe-input';
import ignoreSet from './em-computed-ignore-set';

var EmStripeCVC = EmStripeInput.extend({
  subComponentName: 'cvc',

  didInsertElement: function(){
    this.$().payment('formatCardCVC');
  },

  cardType: Em.computed('number', function(k,v){
    return $.payment.cardType(this.get('number'));
  }),

  isValid: ignoreSet('value', 'cardType', function(){
    return $.payment.validateCardCVC(this.get('value'), this.get('cardType'));
  })
});

export default EmStripeCVC;
