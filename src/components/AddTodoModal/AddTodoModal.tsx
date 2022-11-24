import React, {FC, useState} from 'react';
import s from './AddTodoModal.module.css'
import {useAppDispatch} from "../../redux/hooks";
import {addItemToGroup} from "../../redux/slices/todoSlice";

interface IProps {
    modal: boolean;
    handleModal: () => void;
    name: string
}

export const AddTodoModal:FC<IProps> = ({name, modal, handleModal}) => {
    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()

    const addTodo = () => {
        if (value.trim() !== '' && value) {
            dispatch(addItemToGroup({name, item: value}))
            setValue('')
            handleModal()
        }
    }

    return (
        <div className={`${s.bg} ${!modal ? s.closed: null}`} onClick={() => handleModal()}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <h1 className={s.title}>Enter Todo</h1>
                <input className={s.input} onChange={(e) => setValue(e.target.value)} value={value}/>
                <button className={s.button228} onClick={() => addTodo()}>Add</button>
            </div>
        </div>
    );
}
