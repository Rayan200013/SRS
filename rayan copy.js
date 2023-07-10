class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  read() {
    return `You've started reading ${this.title} by ${this.author}. It has ${this.pages} pages.`;
  }
}
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBook(title) {
    for (let book of this.books) {
      if (book.title === title) {
        return book;
      }
    }
    return "Book not found.";
  }
}

const library = new Library();

const book1 = new Book("Title 1", "Author 1", 100);
const book2 = new Book("Title 2", "Author 2", 200);
const book3 = new Book("Title 3", "Author 3", 300);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const bookTitle = document.getElementById("bookTitle").value;
    const resultElement = document.getElementById("searchResults");

    const foundBook = library.findBook(bookTitle);

    if (foundBook === "Book not found.") {
      resultElement.textContent = "Book not found.";
    } else {
      resultElement.textContent = `Title: ${foundBook.title}\nAuthor: ${foundBook.author}\nPages: ${foundBook.pages}`;
    }
  });

document
  .getElementById("addBookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const newBookTitle = document.getElementById("newBookTitle").value;
    const newBookAuthor = document.getElementById("newBookAuthor").value;
    const newBookPages = parseInt(
      document.getElementById("newBookPages").value
    );

    const newBook = new Book(newBookTitle, newBookAuthor, newBookPages);
    library.addBook(newBook);

    document.getElementById("newBookTitle").value = "";
    document.getElementById("newBookAuthor").value = "";
    document.getElementById("newBookPages").value = "";

    alert("Book added successfully!");
  });
