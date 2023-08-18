import { makeAutoObservable } from 'mobx'
import { User } from '../utils/types'

export class Store {
    colorTheme = 'light'
    pop_visible = false
    user: User | null = null//{ username: 'Stanislav', email: 'mail@gmail.com' }

    constructor() {
        makeAutoObservable(this)
    }
    
    setUser = (user: User | null) => {
        this.user = user
    }

    setVisible = (value: boolean | void) => {
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

