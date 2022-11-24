import s from './AddGroupModal.module.css'
import React, {useState} from 'react'
import {useAppDispatch} from "../../redux/hooks";
import {addGroup} from '../../redux/slices/todoSlice'

interface AddGroupModalI {
    modal: boolean,
    handleClick: () => void
}
export const AddGroupModal: React.FC<AddGroupModalI> = ({modal, handleClick}) => {
    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()

    const handleGroup = () => {
        if (value.trim() !== '' && value) {
            dispatch(addGroup(value))
            setValue('')
            handleClick()
        }
    }

    return (
        <div className={`${s.modalBg} ${!modal ? s.closed : null}`} onClick={() => handleClick()}>
            <div className={s.modalCont} onClick={e => e.stopPropagation()}>
                <h1 className={s.title}> Enter name of group </h1>
                <input className={s.input} maxLength={15} type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                <button className={s.btn} onClick={() => handleGroup()}>Add</button>
            </div>
        </div>
    )
}