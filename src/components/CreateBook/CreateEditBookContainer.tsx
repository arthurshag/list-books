import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import CreateEditBook from "./CreateEditBook";
import {Store} from "../../store/store";


interface IProps {
    store: Store
}

const CreateEditBookContainer: FC<IProps> = observer(({store}) => {
    return (<>
            {
                store.modal.isOpen &&
                <CreateEditBook book={store.bookModal} close={() => store.changeVisibilityModal(false)}
                                submit={(book) => {
                                    store.updateOrAddBook(book);
                                    store.changeVisibilityModal(false);
                                }}/>
            }
        </>
    );
});

export default CreateEditBookContainer;
