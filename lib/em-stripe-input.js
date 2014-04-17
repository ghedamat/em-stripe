var EmStripeInput = Ember.TextField.extend({
  classNameBindings: ['error'],

  isValid: false,

  initValue: (function(){
    this.set('value', undefined);
  }).on('didInsertElement'),

  focusIn: function(){
    this.set("isEntered", false)
  },

  focusOut: function(){
    Em.run.schedule('actions', this, function(){
      this.set("isEntered", true);
    })
  },

  error: Em.computed('isValid', 'isEntered', 'isRequired', function(){
    if (!(this.get('isEntered') || this.get('isRequired'))){
      return false
    }
    return this.get('isValid')
  })

});

export default EmStripeInput;
