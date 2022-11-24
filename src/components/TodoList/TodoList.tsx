import React, {FC} from 'react';
import s from './TodoList.module.css'
import {useAppSelector} from "../../redux/hooks";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListI {
    name: string;
    handleModal: () => void;
}
const TodoList : FC<TodoListI> = ({name, handleModal}) => {

    const items = useAppSelector(state => state.todo.groups)
    const todos = items.find(item => item.name === name)

    if (name) {
        return (
            <div className={s.div}>
                <h1 className={s.nameOfGroup}>{name}</h1>
                <div className={s.items}>
                    {
                        todos ? todos.items.map((item) => <TodoItem text={item.text} completed={item.completed} id={item.id}  activeGroup={name} key={item.id}/>) : null
                    }
                </div>
                <h2 className={s.add} onClick={() => handleModal()}>+ добавить задание</h2>

            </div>
        );
    } else {
        return (
            <div className={s.div}>
                <h1 className={s.nameOfGroup}>You have not selected a group yet</h1>
            </div>
        )
    }
};

export default TodoList;
