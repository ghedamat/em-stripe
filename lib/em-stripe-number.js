import EmStripeInput from './em-stripe-input';
import ignoreSet from './em-computed-ignore-set';

var EmStripeNumber = EmStripeInput.extend({
  subComponentName: 'number',

  didInsertElement: function(){
    this.$().payment('formatCardNumber');
  },

  isValid: ignoreSet('value', function(key, value){
    return $.payment.validateCardNumber(this.get('value'));
  })
});

export default EmStripeNumber;
