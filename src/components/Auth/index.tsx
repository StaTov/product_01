import { useContext } from "react"
import { context } from "../.."
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { observer } from "mobx-react"

const Auth = () => {

    const store = useContext(context)

    //switch signIn or signUp component is render
    switch (store.signMenu) {
        case ('in'):
            return <SignIn />
        case ('up'):
            return <SignUp />
        default:
            return null
    }

}

export default observer(Auth)