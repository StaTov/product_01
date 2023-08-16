

import { Outlet } from 'react-router-dom';
import ButtonToggleTheme from '../NavButtonToggleTheme';
import PopPerson from '../NavPopPerson';
import NavProgress from '../NavProgress';
import './NavBar.scss'

import { observer } from 'mobx-react';



const NavBar = () => {


    return (
        <div>
            <nav className='nav nav__bg'>
                <div className='nav__left'>
                    <div className='nav__title'>TEXT</div>
                </div>
                <div className='nav__right'>
                    <ButtonToggleTheme />
                    <PopPerson />
                </div>
            </nav>
            <NavProgress />
            <Outlet />
        </div>
    )
}

export default observer(NavBar);