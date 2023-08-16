import { makeAutoObservable } from 'mobx'

export class Store {
    colorTheme = 'light'
    visible = false

    constructor() {
        makeAutoObservable(this)
    }

    setVisible = (value: boolean | void) => {
        if ( typeof value === 'boolean') {
            this.visible = value
            return
        }
        this.visible = !this.visible
        
    }

    setColorTheme = () => {
        this.colorTheme = this.colorTheme === 'light' ? 'dark' : 'light'
    }
}

