import EmStripeInput from './em-stripe-input';
import ignoreSet from './em-computed-ignore-set';

var EmStripeDate = EmStripeInput.extend({
  didInsertElement: function(){
    this.$().payment('formatCardExpiry');
  },

  date: Em.computed('value', function(){
    return Em.Object.create($.payment.cardExpiryVal(this.get('value') || ''));
  }),

  month: Em.computed.alias('date.month'),

  year: Em.computed.alias('date.year'),

  isValid: ignoreSet('month', 'year', function(){
    return $.payment.validateCardExpiry(this.get('month'), this.get('year'));
  })
});

export default EmStripeDate;
