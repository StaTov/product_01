import { useContext } from 'react';
import IconEmailOutline from '../../../assets/icon/IconEmail'
import IconKey from '../../../assets/icon/IconKey'
import './SignIn.scss'
import { observer } from 'mobx-react'
import { context } from '../../..';
import IconEye from '../../../assets/icon/IconEye';
import IconEyeInvisible from '../../../assets/icon/IconEyeInvisible';



const SignIn = () => {

    const store = useContext(context)


    // change style input
    const stylePassword = store.errMessageInputPassword ? 'input__invalid' : ''
    const styleEmail = store.errMesageInputEmail ? 'input__invalid' : ''

    //submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //chek email and pass are valid
        if (!store.userInputPassword) {
            store.setErrMessageInputPassword('* поле обязательно для заполнения')
        }
        if (!store.userInputEmail) {
            store.setErrMesageInputEmail('* поле обязательно для заполнения')
        }

        if (!store.userInputEmail.includes('@')) {
            store.setErrMesageInputEmail('* введите действующий email')
        }

        // if no error-message do submit

        if (!store.errMesageInputEmail && !store.errMessageInputPassword) {
            console.log('data', {
                email: store.userInputEmail,
                password: store.userInputPassword
            })
        }
        return
    }

    const handleFocusEmail = () => {
        store.setErrMesageInputEmail('')
    }
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        store.setUserInputEmail(e.target.value)
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        store.setUserInputPassword(e.target.value)
    }
    const handleFocusPassword = () => {
        store.setErrMessageInputPassword('')
    }
    const handlePwdVisible = (e: React.SyntheticEvent) => {
        e.preventDefault()
        store.isVisibleUserPassword()
    }

    const handleClickReg = () => {
        store.toggleSignMenu()
    }

    return (
        <div className='sign__container bg'>
            <div className='sign__body'>
                <div className='sign__title' >
                    Войти в LOGO-TYPE
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='sign__box'>
                        <label htmlFor='input_email'>
                            <IconEmailOutline />
                            <input
                                onFocus={handleFocusEmail}
                                onChange={handleChangeEmail}
                                value={store.userInputEmail}
                                className={`form__input ${styleEmail}`}
                                placeholder='email'
                            />
                            {store.errMesageInputEmail
                                && <p className='form__input_error'>{store.errMesageInputEmail}</p>}
                        </label>
                        <label htmlFor='input_pwd'>
                            <IconKey />
                            <div className='icon__eye_box' title='показать/скрыть пароль' onClick={handlePwdVisible}>
                                {store.typePasswordVisible
                                    ? <IconEye />
                                    : <IconEyeInvisible />}
                            </div>
                            <input
                                onFocus={handleFocusPassword}
                                onChange={handleChangePassword}
                                value={store.userInputPassword}
                                name='password'
                                className={`form__input ${stylePassword}`}
                                id='input_pwd'
                                type={store.typePasswordVisible ? 'password' : 'text'}
                                placeholder='password'
                            />
                            {store.errMessageInputPassword
                                && <p className='form__input_error'>{store.errMessageInputPassword}</p>}
                        </label>
                        <button className='form__btn_blue' type='submit'>Войти</button>
                    </div>
                </form>
                <div className='sign__divider'></div>
                <button onClick={handleClickReg} className='form__btn_orange'>Регистрация</button>
            </div>
        </div>
    )
}

export default observer(SignIn)

