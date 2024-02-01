'use strict'

class QuoteBank {
  constructor(){
    this.quotes = []
  }

  addQuote(quote) {
    this.quotes.push(quote)
  }
  deleteQuote(id) {
    this.quotes = this.quotes.filter(quote => quote.id !== id)
  }
}

export { QuoteBank }
