import { useContext, useEffect, useRef } from "react"
import IconPerson from "../../assets/icon/IconPerson"
import { observer } from 'mobx-react';
import { context } from "../.."
import './PopPerson.scss'

const PopPerson = () => {


    const store = useContext(context)
    const visible = store.visible ? 'pop__visible' : ''
    const root = useRef<HTMLDivElement>(null)

    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
            if (
                event.target instanceof Element
                && root.current
                && !root.current.contains(event.target)
            ) {
                store.setVisible()
            }
        }
        if (store.visible) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [store.visible, store]);



    const handleVisible = (e: React.SyntheticEvent) => {
        store.setVisible()
    }

    const stopPropagation = (e: React.SyntheticEvent) => {
        e.stopPropagation()
    }

    return (

        <div ref={root} className='nav__IconPerson_wrapper' onClick={handleVisible}>
            <IconPerson />
            <div onClick={stopPropagation} className={`nav__menu_person ${visible}`}>
                <div className='pop__person'>
                    <div className='nav__pop__person_name'>Stanislav</div>
                    <div className='nav__pop__person_wrapper'>
                        <IconPerson />
                    </div>
                    <div className='nav__pop__person_fullname'>
                        Stanislav Tovch
                    </div>
                    <div className='nav__pop__person_mail text-sh'>
                        tovchfamily@gmail.com
                    </div>
                    <div>
                        <button className='p__btn'>выйти</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default observer(PopPerson)