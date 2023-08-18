import { Route, Routes} from 'react-router-dom';
import { observer } from 'mobx-react'
import './App.scss';
import { useContext} from 'react';
import { context } from '../..';
import Page from '../Page';
import SignIn from '../Auth/SignIn';


const App = () => {

  const store = useContext(context)
  return (
    <div className={store.colorTheme}>
      <div className='container bg'>
        <Routes>
          <Route path='/' element={<Page />} >
            <Route path='/auth' element={<SignIn />} />
            <Route path='/sign' element={''} />
            <Route path='/step3' element={''} />
          </Route>
        </Routes>
      </div>
    </div >
  );
}

export default observer(App);


