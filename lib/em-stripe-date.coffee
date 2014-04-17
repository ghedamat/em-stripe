`import EmStripeInput from './em-stripe-input'`
`import ignoreSet from 'appkit/utils/em-computed-ignore-set'`

EmStripeDate = EmStripeInput.extend
  didInsertElement: ->
    @$().payment('formatCardExpiry')

  date: Em.computed 'value', ->
    Em.Object.create $.payment.cardExpiryVal(@get('value') || '')

  month: Em.computed.alias 'date.month'

  year: Em.computed.alias 'date.year'

  isValid: ignoreSet 'month', 'year',  () ->
    $.payment.validateCardExpiry @get('month'), @get('year')

`export default EmStripeDate`
