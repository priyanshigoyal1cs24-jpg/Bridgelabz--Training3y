class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title; this.author = author; this.isbn = isbn; this.isIssued = isIssued;
    }
    issueBook() {
        if (this.isIssued) return `${this.title} is already issued.`;
        this.isIssued = true; return `${this.title} has been issued.`;
    }
    returnBook() {
        if (!this.isIssued) return `${this.title} was not issued.`;
        this.isIssued = false; return `${this.title} has been returned.`;
    }
}
const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN002"),
    new Book("1984", "George Orwell", "ISBN003", true)
];
console.log("Available books:");
books.filter(book => !book.isIssued).forEach(book => console.log(`${book.title} by ${book.author} (${book.isbn})`));
const searchISBN = "ISBN002";
const selectedBook = books.find(book => book.isbn === searchISBN);
console.log(selectedBook ? selectedBook.issueBook() : "Book not found.");
console.log("\nCurrent book status:", books);
