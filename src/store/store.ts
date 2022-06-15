import {IBook} from "../models/IBook";
import {makeAutoObservable} from "mobx"

export class Store {
    private idCounter = 0;
    readonly modal = {
        isOpen: false,
        idBook: -1,
    };

    books = [] as IBook[];

    constructor() {
        makeAutoObservable(this);
        const books = localStorage.getItem("books")
        const idCounter = localStorage.getItem("idCounter")
        this.books = books ? (JSON.parse(books) || []) : [];
        this.idCounter = idCounter ? Number(JSON.parse(idCounter)) : 0;
    }

    private updateLocalStorage() {
        localStorage.setItem("books", JSON.stringify(this.books));
        localStorage.setItem("idCounter", JSON.stringify(this.idCounter));
    }

    changeVisibilityModal(value: boolean) {
        this.modal.isOpen = value;
        if (!value)
            this.modal.idBook = -1;
    }

    updateOrAddBook(book: Omit<IBook, "id"> & {id?: number}){
        if (book.id){
            this.updateBook(book as IBook);
        } else {
            this.addBook(book);
        }

        this.updateLocalStorage();
    }

    updateBook(book: IBook) {
        const index = this.books.findIndex((b) => b.id === book.id);
        this.books[index] = book;
    }

    addBook(book: Omit<IBook, "id"> ) {
        this.books.push({...book, id: this.idCounter})
        this.idCounter++;
        this.updateLocalStorage();
    }

    setBooks(books: IBook[]) {
        this.books = books;
    }

    deleteBook = (id: number) => {
        const findIndex = this.books.findIndex(((b) => b.id === id));
        this.books.splice(findIndex, 1);
        this.updateLocalStorage();
    }

    changeOpenModalWithFile = (id: number) => {
        this.modal.idBook = id;
        this.modal.isOpen = true;
    }

    get bookModal() {
        return this.books.find((book) => book.id === this.modal.idBook);
    }
}



