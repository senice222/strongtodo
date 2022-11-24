import React, {useState} from 'react';
import './App.module.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import TodoList from "./components/TodoList/TodoList";
import {AddGroupModal} from "./components/AddGroupModal/AddGroupModal";
import {AddTodoModal} from "./components/AddTodoModal/AddTodoModal";
import ConfirmModal from "./components/ConfirmDeleteModal/ConfirmModal";
import s from './App.module.css'

const App = () => {
    const [name, setName] = useState<string>('')
    const [modal, setModal] = useState<boolean>(false)
    const [todoModal, setTodoModal] = useState<boolean>(false)
    const [modalValue, setModalValue] = useState<boolean>(false)
    const [confirmData, setConfirmData] =  useState<string>('')


    const handleName = (name : string) => {
        setName(name)
    }

    const handleModal = () => {
        setTodoModal(!todoModal)
    }

    const handleClick = () => {
        setModal(!modal)
    }

    const confirmModal = () => {
        setModalValue(!modalValue)
    }
    const handleConfirm = (name: string) => {
        setConfirmData(name)
    }

    return (

        <Provider store={store}>
           <PersistGate loading={null} persistor={persistor} >
               <AddTodoModal modal={todoModal} handleModal={handleModal} name={name}/>
               <AddGroupModal modal={modal} handleClick={handleClick}/>
               <ConfirmModal modal={modalValue} setGroup={() => handleName(name)} dataConfirmed={confirmData} confirmModal={confirmModal} setConfirmed={(name : string) => handleConfirm(name)}/>
               <div className={s.App}>
                   <Header/>
                   <div style={{display: 'flex', minHeight: '100vh'}}>
                       <Navbar activeName={name}  handleConfirm={(name : string) => handleConfirm(name)} handleConfirmModal={confirmModal} setName={(name : string) => handleName(name)} handleClick={() => handleClick()}/>
                       <TodoList name={name} handleModal={handleModal}/>
                   </div>
               </div>
               <div className={s.stupid}>
                   <h1 className={s.stupidtext}>Phone doesn't support</h1>
               </div>
           </PersistGate>
        </Provider>
    );
}

export default App;
