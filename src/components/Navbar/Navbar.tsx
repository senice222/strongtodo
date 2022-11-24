import React, {useState, FC} from 'react';
import s from './Navbar.module.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useAppSelector} from '../../redux/hooks'
import {NavItem} from "../NavItem/NavItem";
import PersonIcon from '@mui/icons-material/Person';

interface NavbarI {
    setName: (name: string) => void,
    handleClick: () => void,
    activeName: string;
    handleConfirm: (name: string) => void,
    handleConfirmModal: () => void;

}

const Navbar: FC<NavbarI> = ({activeName, setName, handleClick, handleConfirm, handleConfirmModal}) => {

    const [show, setShow] = useState(true);
    const groups = useAppSelector((state) => state.todo.groups)

    const showItem = () => {
        return setShow(!show)
    }

    return (
        <div className={s.navbar1}>
            <h1 className={s.openB}>Open</h1>
            <div className={s.hotdog}>
                <div className={s.navbar}>
                    <div className={s.titleDiv}>
                        <PersonIcon className={s.icon} fontSize={"large"}/>
                        <h1 className={s.list}>Lists</h1>
                        {
                            show ?
                                <KeyboardArrowUpIcon
                                    className={s.arrow}
                                    fontSize={'large'}
                                    onClick={() => showItem()}
                                />
                                :
                                <KeyboardArrowDownIcon
                                    className={s.arrow}
                                    fontSize={'large'}
                                    onClick={() => showItem()}
                                />
                        }
                    </div>
                    {
                        show ? <div className={s.diva4}>

                            <div className={s.items}>
                                {groups.map((item, i) => <NavItem activeName={activeName}
                                                                  handleConfirm={(sugar: string) => handleConfirm(sugar)}
                                                                  handleConfirmModal={handleConfirmModal}
                                                                  handleClick={setName} name={item.name} key={i}/>)}
                            </div>
                            <button type='submit' className={s.btn} onClick={handleClick}>+</button>

                        </div> : null
                    }
                </div>
            </div>
            <div className={s.line}/>
        </div>
    );
};

export default Navbar;
