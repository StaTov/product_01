import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import NavProgress from '../NavProgress'
import './Page.scss'
import { context } from '../..'
import { useContext, useEffect } from 'react'

const Page = () => {

    const store = useContext(context)
    const navigate = useNavigate()
    const user = localStorage.getItem('user')

    if (user && typeof user === 'string') {
        store.setUser(JSON.parse(user))
    }

    useEffect(() => {
        if (!store.user) {
            navigate('/auth')
        }
    },[navigate, store.user])

    return (
        <>
            <NavBar />
            <div className='page__body_container'>
                {store.user && <NavProgress />}
                <Outlet />
            </div>
        </>
    )
}

export default Page


