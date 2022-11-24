import React, {FC} from 'react'
import s from './ConfirmModal.module.css'
import { deleteGroup} from "../../redux/slices/todoSlice";
import {useAppDispatch} from "../../redux/hooks";


interface IProps {
    modal: boolean;
    confirmModal: () => void;
    setConfirmed: (name : string) => void;
    dataConfirmed: string;
    setGroup: (name: string ) => void
}

const ConfirmModal: FC<IProps> = ({modal, confirmModal, setConfirmed, dataConfirmed, setGroup}) => {

    const dispatch = useAppDispatch()
    const deleteHandler = () => {
        dispatch(deleteGroup(dataConfirmed))
        setConfirmed('')
        setGroup('')
        confirmModal()
    }

    return (
        <div className={`${s.bg} ${!modal ? s.closed : null}`} onClick={() => confirmModal()}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                <h1 className={s.text}>Are you want to delete this group?</h1>
                <div className={s.buttondiv}>
                    <button type='submit' className={s.button} onClick={() => deleteHandler()}>Yes</button>
                    <button type='submit' className={s.button} onClick={() => confirmModal()}>No</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal