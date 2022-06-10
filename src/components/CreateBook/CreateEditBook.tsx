import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import classes from "./createBook.module.scss";
import Modal from "../Modal/Modal";
import {IBook} from "../../models/IBook";
import {observer} from "mobx-react-lite";


interface IProps {
    submit: (value: Omit<IBook, "id">) => void,
    close: () => void,
    book?: IBook
}

const CreateEditBook: FC<IProps> = observer(({close, submit, book}) => {
    const [author, setAuthor] = useState(book?.author || "");
    const [title, setTitle] = useState(book?.title || "");
    const [img, setImg] = useState(book?.img || "");

    function authorHandler(e: ChangeEvent<HTMLInputElement>) {
        setAuthor(e.target.value);
    }

    function titleHandler(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }

    function imgHandler(e: ChangeEvent<HTMLInputElement>) {
        setImg(e.target.value);
    }

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        submit({author: author, title: title, id: book?.id, img: img} as IBook);
    }

    function onClose() {
        close();
    }

    return (
        <Modal className={classes.container} onOutsideClick={close}>
            <section>
                <form className={classes.form} onSubmit={onSubmit}>
                    <label className={classes.input}>
                        <h3>Author</h3>
                        <input onChange={authorHandler} value={author} required={true}/>
                    </label>
                    <label className={classes.input}>
                        <h3>Title</h3>
                        <input onChange={titleHandler} value={title} required={true}/>
                    </label>
                    <label className={classes.input}>
                        <h3>URL img</h3>
                        <input onChange={imgHandler} value={img || undefined}/>
                    </label>
                    <aside className={classes.btns}>
                        <button type={"submit"} className={classes.btn}>Добавить</button>
                        <button className={classes.btn} onClick={onClose}>Отмена</button>
                    </aside>
                </form>
            </section>
        </Modal>

    );
});

export default CreateEditBook;
