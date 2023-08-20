import { makeAutoObservable } from 'mobx'
import { User } from '../utils/types'

export class Store {
    colorTheme = 'light'
    pop_visible = false
    userInputEmail = ''
    userInputPassword = ''
    errMesageInputEmail = ''
    errMessageInputPassword = ''
    typePasswordVisible = true
    user: User | null = null//{ username: 'Stanislav', email: 'mail@gmail.com' }


    constructor() {
        makeAutoObservable(this)
    }

    setErrMesageInputEmail = (str: string): void => {
        this.errMesageInputEmail = str
    }

    setErrMessageInputPassword = (str: string): void => {
        this.errMessageInputPassword = str
    }


    setUserInputPassword = (str: string): void => {
        this.userInputPassword = str
    }

    setUserInputEmail = (str: string): void => {
        this.userInputEmail = str
    }

    isVisibleUserPassword = () => {
        this.typePasswordVisible = !this.typePasswordVisible
    }

    setUser = (user: User | null) => {
        this.user = user
    }

    setPopVisible = (value: boolean | void) => {
        if (typeof value === 'boolean') {
            this.pop_visible = value
            return
        }
        this.pop_visible = !this.pop_visible
    }

    setColorTheme = () => {
        this.colorTheme = this.colorTheme === 'light' ? 'dark' : 'light'
    }
}

