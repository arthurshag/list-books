import React, {FC} from 'react';
import classes from "./books.module.scss";
import {IBook} from "../../models/IBook";
import Book from "../Book/Book";
import {observer} from "mobx-react-lite";

interface IProps {
    books: IBook[],
    edit: (id: number) => void,
    remove: (id: number) => void,
}

const Books: FC<IProps> = observer(({books, remove, edit}) => {
    return (
        <>
            <h2 className={classes.title}>Click on the plus to add book</h2>
            <section className={classes.books}>
                {books.map((book) =>
                    <Book key={book.id} book={book} onRemove={() => remove(book.id)} onEdit={() => edit(book.id)}/>
                )
                }
            </section>
        </>
    );
});

export default Books;
