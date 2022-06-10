import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {Store} from "./store/store";
import CreateEditBookContainer from "./components/CreateBook/CreateEditBookContainer";

const store = new Store();

const AppListBooks = () => {
    return (
        <div className="App">
            <Header openModalCreateBook={() => store.changeVisibilityModal(true)}/>
            <Main store={store}/>
            <CreateEditBookContainer store={store}/>
        </div>
    );
}

export default AppListBooks;
