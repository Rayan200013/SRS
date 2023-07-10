

class Library {
    constructor() {
        this.books = [];
    }
    addBook(book1) {
        this.books.push(book1);


    }
    findBook(BookTitle) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === BookTitle) {
                console.log("find match " + BookTitle);
                break;
            }
            else {
                console.log("Book not found.");
            }
        }
    }
}


const library = new Library();
const book1 = new Book("bookname1", "a", "2");
const book2 = new Book("bookname2", "b", "5");
const book3 = new Book("bookname3", "c", "55");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log(library.books);
console.log(library.findBook("The Great Gatsby"));
console.log(library.findBook("bookname2"));

const searchForm = document.getElementById("searchForm");
const resultDiv = document.getElementById("result");

