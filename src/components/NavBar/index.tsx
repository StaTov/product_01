
import ButtonToggleTheme from '../NavButtonToggleTheme';
import PopPerson from '../NavPopPerson';
import { observer } from 'mobx-react';
import { useContext } from 'react';
import { context } from '../..';
import './NavBar.scss'



const NavBar = () => {
    const store = useContext(context)

    return (
        <div>
            <nav className='nav nav__bg'>
                <div className='nav__left'>
                    <div className='nav__title'>LOGO-TYPE</div>
                </div>
                {store.user &&
                    <div className='nav__right'>
                        <ButtonToggleTheme />
                        <PopPerson />
                    </div>}
            </nav>
        </div>
    )
}

export default observer(NavBar);