`import EmStripeInput from './em-stripe-input'`
`import ignoreSet from 'appkit/utils/em-computed-ignore-set'`

EmStripeNumber = EmStripeInput.extend
  subComponentName: 'number'

  didInsertElement: ->
    @$().payment('formatCardNumber')

  isValid: ignoreSet 'value', (key, value) ->
    $.payment.validateCardNumber @get 'value'

`export default EmStripeNumber`
