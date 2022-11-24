import React from "react";
import s from "./Header.module.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {useTheme} from "../../hooks/useTheme";

function Header() {
    const {theme, setTheme} = useTheme()
    const handleTheme = () => {
        if ( theme === 'dark' ) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    const dateNow = new Date()
    const dateText = `${dateNow.getDate()}.${dateNow.getMonth() + 1}.${dateNow.getFullYear()}`

    return (
        <header className={s.header}>
            <h1 className={s.title}>NTodo</h1>
            <div className={s.pravuySektor}>
                <p className={s.date}>{dateText}</p>
                {
                    theme === 'light' ?
                        <LightModeIcon fontSize={"large"} onClick={() => handleTheme()} className={s.icon}/>
                        :
                        <DarkModeIcon fontSize={"large"} onClick={() => handleTheme()} className={s.icon}/>
                }
            </div>
        </header>
    );
}

export default Header;
