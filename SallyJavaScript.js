

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


// Create instances of Book and Library
const book1 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 280);
const book2 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 600);
const book3 = new Book("The Hunger Games", "Suzanne Collins", 555);
const book4 = new Book("To Kill a Mockingbird", "Harper Lee", 400);
const book5 = new Book("The Great Gatsby", "F. Scott Fitzgeral", 560);
const book6 = new Book("The Catcher in the Rye", "J.D Salinger", 510);


const library = new Library();
library.addBook(book1);// Add books to the library
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);

console.log(library.books);
console.log(library.findBook("The Great Gatsby"));
console.log(library.findBook("bookname2"));

const searchForm = document.getElementById("searchForm");
const resultDiv = document.getElementById("result");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const bookTitle = document.getElementById("bookTitle").value;
    const book = library.findBook(bookTitle);

});







const books_list = [
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        page: 280,
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        page: 600,
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        page: 555,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        page: 400,
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        page: 560,
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        page: 510,
    },
];

const listBooks = () => {
    const ul = document.createElement("ul");
    for (const book of books_list) {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author} with ${book.page} `;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};

listBooks();