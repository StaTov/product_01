
import IconPerson from '../../assets/icon/IconPerson';
import ButtonToggleTheme from '../NavButtonToggleTheme';
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
                        <div className='pop__person'>
                            <div className='nav__pop__person_name text'>Stanislav</div>
                            <div className='nav__pop__person_wrapper'>
                                <IconPerson />
                            </div>
                            <div className='nav__pop__person_fullname text'>
                                Stanislav Tovch
                            </div>
                            <div className='nav__pop__person_mail text-sh'>
                                tovchfamily@gmail.com
                            </div>
                            <div>
                                <button className='btn text'>выйти</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;