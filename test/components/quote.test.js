'use strict'

import { Quote } from '../../src/js/components/quote.js'

describe('Quote', () => {
  // Quote instance can be created with an ID and text
  it('should create a new Quote instance with the given ID and text', () => {
    const quote = new Quote(1, 'This is a quote')
    expect(quote.id).toBe(1)
    expect(quote.text).toBe('This is a quote')
  })

  // The text of a Quote instance can be updated using the editText method
  it('should update the text of the Quote instance with the given new text', () => {
    const quote = new Quote(1, 'This is a quote')
    quote.editText('This is an updated quote')
    expect(quote.text).toBe('This is an updated quote')
  })

  // The ID and text of a Quote instance can be accessed
  it('should access the ID and text of the Quote instance', () => {
    const quote = new Quote(1, 'This is a quote')
    expect(quote.id).toBe(1)
    expect(quote.text).toBe('This is a quote')
  })

  // ID can be a negative number
  it('should allow ID to be a negative number', () => {
    const quote = new Quote(-1, 'This is a quote')
    expect(quote.id).toBe(-1)
  })

  // ID can be zero
  it('should allow ID to be zero', () => {
    const quote = new Quote(0, 'This is a quote')
    expect(quote.id).toBe(0)
  })

  // Text can be an empty string
  it('should allow text to be an empty string', () => {
    const quote = new Quote(1, '')
    expect(quote.text).toBe('')
  })
})
