import IconEmailOutline from '../../../assets/icon/IconEmail'
import IconKey from '../../../assets/icon/IconKey'
import './SignIn.scss'

const SignIn = () => {
    return (
        <div className='sign__container'>
            <div className='sign__body'>
                <div className='sign__title' >
                    Войти в LOGO-TYPE
                </div>
                <form className='sign__form'>
                    <label htmlFor='input_email'>
                        <div className='sign__input_wrapper'>
                            <IconEmailOutline />
                            <input
                                className='sign__input'
                                id='input_email'
                                type='text'
                                placeholder='email'

                            />
                        </div>
                        <p></p>
                    </label>
                    <label htmlFor='input_pwd'>
                        <div className='sign__input_wrapper'>
                            <IconKey />
                            <input
                                className='sign__input'
                                id='input_pwd'
                                type='password'
                                placeholder='password'
                            />
                        </div>
                        <p></p>
                    </label>
                    <button className='sign__btn' type='submit'>Войти</button>
                </form>
                <div className='sign__divider'></div>
                <button className='sign__btn_reg'>Регистрация</button>
            </div>
        </div>
    )
}

export default SignIn