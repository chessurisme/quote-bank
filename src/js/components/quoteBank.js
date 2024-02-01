'use strict'

/**
 * Represents a collection of quotes.
 */
class QuoteBank {
  /**
   * Initializes a new instance of the QuoteBank class.
   */
  constructor() {
    /**
     * An array that stores the quotes in the collection.
     * @type {Array}
     */
    this.quotes = []
  }

  /**
   * Adds a quote to the collection.
   * @param {Object} quote - The quote to be added.
   */
  addQuote(quote) {
    this.quotes.push(quote)
  }

  /**
   * Deletes a quote from the collection based on its ID.
   * @param {number} id - The ID of the quote to be deleted.
   */
  deleteQuote(id) {
    this.quotes = this.quotes.filter(quote => quote.id !== id)
  }
}

export { QuoteBank }
