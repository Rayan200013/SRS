class Book {
    constructor(title, author, pages) {
      this.title = title
      this.author = author
      this.pages = pages
    }
    read() {
        const saying = 'You have started reading '+ this.title + ' by ' + this.author + '. It has '+ this.pages + ' pages.'
        return saying
      }
  }
  
  const book1 = new Book('Wonders of Assignment 1', 'Salam', 300)
  
  console.log(book1.read())


