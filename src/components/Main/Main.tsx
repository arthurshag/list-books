import React, {FC} from 'react';
import classes from "./main.module.scss";
import Books from "../Books/Books";
import {Store} from "../../store/store";

interface IProps {
    store: Store
}

const Main:FC<IProps> = ({store}) => {
    return (
        <main className={classes.container}>
            <Books books={store.books} edit={store.changeOpenModalWithFile} remove={store.deleteBook}/>
        </main>
    );
};

export default Main;
