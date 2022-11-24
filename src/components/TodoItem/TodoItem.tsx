import React, {FC} from 'react';
import s from './TodoItem.module.css'
import {useAppDispatch} from "../../redux/hooks";
import {completeItem} from "../../redux/slices/todoSlice";
import {deleteItemInGroup} from '../../redux/slices/todoSlice'
import CancelIcon from '@mui/icons-material/Cancel';

interface TodoItemI {
    text: string,
    completed: boolean,
    id: string,
    activeGroup: string
}

const TodoItem : FC<TodoItemI> = ({text, completed, id, activeGroup}) => {
    const dispatch = useAppDispatch()

    const handleCheck = () => {
        dispatch(completeItem({group: activeGroup, id, }))
    }

    const handleDeleteItem = () => {
        dispatch(deleteItemInGroup({name : activeGroup, id}))
    }

    return (
        <div className={s.item}>
            <input type='checkbox' className={s.input} checked={completed} onChange={() => handleCheck()}/>
            <h2 className={s.text}>{text}</h2>
            <CancelIcon className={s.icon} fontSize={'large'} onClick={() => handleDeleteItem()}/>
        </div>
    );
};

export default TodoItem;
