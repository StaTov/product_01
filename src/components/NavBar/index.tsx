
import IconPerson from '../../assets/icon/IconPerson';
import ButtonToggleTheme from '../ButtonToggleTheme';
import './NavBar.scss'


const NavBar = () => {



    return (
        <nav className='nav nav__bg'>
            <div className="nav__left ">
                <div className="text">TEXT</div>
            </div>
            <div className='nav__right'>
                <ButtonToggleTheme />
                <div className='nav__IconPerson_wrapper'                >
                    <IconPerson />
                    <div className='nav__menu_person'>
                        <div className='pop__bg'>
                            
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;