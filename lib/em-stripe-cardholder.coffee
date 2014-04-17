`import EmStripeInput from './em-stripe-input'`
`import ignoreSet from 'appkit/utils/em-computed-ignore-set'`

EmStripeCardholder = EmStripeInput.extend
  isValid: ignoreSet 'value', () ->
    !Em.isBlank(@get('value'))

`export default EmStripeCardholder`
