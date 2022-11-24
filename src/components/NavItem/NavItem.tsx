import React, {FC} from "react";
import s from './NavItem.module.css';
import CancelIcon from '@mui/icons-material/Cancel';

interface NavItemI {
    name: string,
    handleClick: (name: string) => void;
    activeName: string,
    handleConfirm: (name: string) => void,
    handleConfirmModal: () => void
}

export const NavItem: FC<NavItemI> = ({name, handleClick, activeName, handleConfirm, handleConfirmModal}) => {
    const active = name === activeName ? true : null


    const handleDelete = () => {
        handleConfirm(name)
        handleConfirmModal()
     }

    return (

        <div className={s.item}>
            <div className={s.dot}></div>
            <div onClick={() => handleClick(name)} className={s.niga}>
                <h1 className={`${s.name} ${active ? s.active : null}`}>{name}</h1>
            </div>
            <CancelIcon className={s.cross} onClick={() => handleDelete()} fontSize={'large'}/>
        </div>

    )
}
