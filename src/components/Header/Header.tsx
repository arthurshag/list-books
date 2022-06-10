import React, {FC} from 'react';
import classes from "./header.module.scss";
import {ReactComponent as Logo} from "../../assets/Logo.svg";
import {ReactComponent as Add} from "../../assets/plus.svg";

interface IProps {
    openModalCreateBook: () => void
}

const Header: FC<IProps> = ({openModalCreateBook}) => {
    return (
        <header className={classes.header}>
            <div className={classes.headerWrapper}>
                <div className={classes.logo}><Logo/> List Books</div>
                <button className={classes.btn} onClick={openModalCreateBook}><Add/></button>
            </div>
        </header>
    );
};

export default Header;
