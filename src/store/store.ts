import { makeAutoObservable } from 'mobx'

export class Store {
    colorTheme = 'light'
  
    constructor() {
        makeAutoObservable(this)
    }

    setColorTheme = () => {
        this.colorTheme = this.colorTheme === 'light' ? 'dark' : 'light'
    }
}

