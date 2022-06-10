import React, {FC, MouseEventHandler, useRef} from 'react';
import classes from "./modal.module.scss";

interface IProps {
    onOutsideClick?: () => void
    className?: string,
    children?: any
}

const Modal: FC<IProps> = ({children, onOutsideClick, className}) => {
    const ref = useRef<HTMLDivElement>(null);
    const onOutClick: MouseEventHandler<HTMLDivElement> = (event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            onOutsideClick?.();
        }
    };

    return (
        <section className={classes.modal} onClick={onOutClick}>
            <div className={classes.modal__content + (className ? ` ${className}` : "")} ref={ref}>
                {children}
            </div>
        </section>
    )
};

export default Modal;
