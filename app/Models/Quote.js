export class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author

    }



    get Template() {
        return `
        <div class="text quoteText">
            <p class="showAuthor">${this.content}</p>
            <b class="hide">${this.author}</b>
          </div>
        `
    }
}