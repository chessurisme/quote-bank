'use strict'

/**
 * Represents a quote with an ID and text.
 */
class Quote {
  /**
   * Initializes a new instance of the Quote class with the given ID and text.
   * @param {number} id - The ID of the quote.
   * @param {string} text - The text of the quote.
   */
  constructor(id, text) {
    this.id = id
    this.text = text
  }

  /**
   * Updates the text of the quote with the given new text.
   * @param {string} newText - The new text for the quote.
   */
  editText(newText) {
    this.text = newText
  }
}

export { Quote }
