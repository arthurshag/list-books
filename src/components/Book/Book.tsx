import React, {FC} from 'react';
import classes from "./book.module.scss";
import {IBook} from "../../models/IBook";
import {ReactComponent as Edit} from "./../../assets/edit.svg";
import {ReactComponent as Delete} from "./../../assets/delete.svg";

const baseImg = "https://vertikalpass.de/wp-content/uploads/2015/09/VfB-Null.jpg"

interface IProps {
    book: IBook,
    onRemove: () => void,
    onEdit: () => void,
}

const Book: FC<IProps> = ({book, onRemove, onEdit}) => {
    const {title, author, img} = book;

    return (
        <div className={classes.book}>
            <img src={img || baseImg} alt={title} className={classes.img}/>
            <p className={classes.author}>{author}</p>
            <h4 className={classes.title}>{title}</h4>
            <aside className={classes.btns}>
                <button className={classes.btn} onClick={onEdit}><Edit/></button>
                <button className={classes.btn} onClick={onRemove}><Delete/></button>
            </aside>
        </div>
    );
};

export default Book;
