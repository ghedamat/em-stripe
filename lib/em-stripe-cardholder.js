import EmStripeInput from './em-stripe-input';
import ignoreSet from './em-computed-ignore-set';

var EmStripeCardholder = EmStripeInput.extend({
  isValid: ignoreSet('value', function(){
    return !Em.isBlank(this.get('value'));
  })
});

export default EmStripeCardholder;
