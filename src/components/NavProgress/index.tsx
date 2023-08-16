import { stepDescription } from '../../utils/constants';
import './Progress.scss'


const NavProgress = () => {

    const currentStep = 4;

    function stepCreator(d: string, i: number) {

        let statusColor;

        switch (true) {
            case (i < currentStep):
                statusColor = 'p__success'
                break
            case (i === currentStep):
                statusColor = 'p__panding'
                break
            default:
                statusColor = ''
                break
        }

        const roadStyle = (i < currentStep) ? statusColor : ''
      



        return (
            <div key={i} className='nav__progress_step'>
                <div className='p__step text'>Шаг {i}</div>
                <div className='p__point_wrapper'>
                    <div className={`p__point ${statusColor}`} ></div>
                    {(i !== stepDescription.length - 1) && <div className={`p__road ${roadStyle}`} ></div>}
                </div>
                <div className='p__description text'><i>{d}</i></div>
            </div>
        )
    }

    return (

        <div className='nav__progress_container'>
            {stepDescription.map(stepCreator)}
        </div>
    )
}

export default NavProgress;