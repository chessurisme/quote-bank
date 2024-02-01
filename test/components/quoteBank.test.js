'use strict'

import { QuoteBank } from '../../src/js/components/quoteBank.js'

describe('QuoteBank', () => {

  // Can add a quote to the quote bank using addQuote method
  it('should add a quote to the quote bank when addQuote method is called', () => {
    // Arrange
    const quoteBank = new QuoteBank()
    const quote = { id: 1, text: 'This is a quote' }

    // Act
    quoteBank.addQuote(quote)

    // Assert
    expect(quoteBank.quotes.length).toBe(1)
    expect(quoteBank.quotes[0]).toEqual(quote)
  })

  // Can delete a quote from the quote bank using deleteQuote method
  it('should delete a quote from the quote bank when deleteQuote method is called with a valid ID', () => {
    // Arrange
    const quoteBank = new QuoteBank()
    const quote1 = { id: 1, text: 'This is quote 1' }
    const quote2 = { id: 2, text: 'This is quote 2' }
    quoteBank.addQuote(quote1)
    quoteBank.addQuote(quote2)

    // Act
    quoteBank.deleteQuote(1)

    // Assert
    expect(quoteBank.quotes.length).toBe(1)
    expect(quoteBank.quotes[0]).toEqual(quote2)
  })

  // Can add multiple quotes to the quote bank using addQuote method
  it('should add multiple quotes to the quote bank when addQuote method is called multiple times', () => {
    // Arrange
    const quoteBank = new QuoteBank()
    const quote1 = { id: 1, text: 'This is quote 1' }
    const quote2 = { id: 2, text: 'This is quote 2' }

    // Act
    quoteBank.addQuote(quote1)
    quoteBank.addQuote(quote2)

    // Assert
    expect(quoteBank.quotes.length).toBe(2)
    expect(quoteBank.quotes[0]).toEqual(quote1)
    expect(quoteBank.quotes[1]).toEqual(quote2)
  })

  // Attempting to delete a quote with an id of null should not throw an error
  it('should not throw an error when deleteQuote method is called with an id of null', () => {
    // Arrange
    const quoteBank = new QuoteBank()
    const quote = { id: null, text: 'This is a quote' }
    quoteBank.addQuote(quote)

    // Act & Assert
    expect(() => quoteBank.deleteQuote(null)).not.toThrow()
  })

  // Attempting to delete a quote with an id of undefined should not throw an error
  it('should not throw an error when deleteQuote method is called with an id of undefined', () => {
    // Arrange
    const quoteBank = new QuoteBank()
    const quote = { id: undefined, text: 'This is a quote' }
    quoteBank.addQuote(quote)

    // Act & Assert
    expect(() => quoteBank.deleteQuote(undefined)).not.toThrow()
  })

  // Attempting to delete a quote with an id of NaN should not throw an error
  it('should not throw an error when deleteQuote method is called with an id of NaN', () => {
    // Arrange
    const quoteBank = new QuoteBank()
    const quote = { id: NaN, text: 'This is a quote' }
    quoteBank.addQuote(quote)

    // Act & Assert
    expect(() => quoteBank.deleteQuote(NaN)).not.toThrow()
  })
})
