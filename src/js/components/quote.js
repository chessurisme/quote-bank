'use strict'

class Quote {
  constructor(id, text) {
    this.id = id
    this.text = text
  }

  editText(newText) {
    this.text = newText
  }
}

export { Quote }
