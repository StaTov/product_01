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
            console.log('0', this.visible)
            return
        }
        this.visible = !this.visible
        console.log('1', this.visible)
    }

    setColorTheme = () => {
        this.colorTheme = this.colorTheme === 'light' ? 'dark' : 'light'
    }
}

