import { useContext } from "react";
import { context } from "../..";
import IconMoon from "../../assets/icon/IconMoon";
import IconSun from "../../assets/icon/IconSun";
import  './NavButtonToggleTheme.scss'

const ButtonToggleTheme = () => {

    const store = useContext(context)

    const toggleTheme = () =>
        store.setColorTheme()

    return (
        <button className='nav__btn_themeColor' onClick={toggleTheme}>
            <div className='nav__btn_themeColor_body border'>
                <IconMoon />
                <IconSun />
            </div>
        </button>
    )
}

export default ButtonToggleTheme;