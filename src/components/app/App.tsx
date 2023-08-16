import { Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react'
import './App.scss';
import NavBar from '../NavBar';
import { useContext } from 'react';
import { context } from '../..';




const App = () => {

  const store = useContext(context)

  return (
    <div className={store.colorTheme}>
      <div className='container bg'>
        <Routes>
          <Route path='/' element={<NavBar />} >
            <Route path='/;' element={''} />
            <Route path='/f' element={''} />
            <Route path='/g' element={''} />
          </Route>
        </Routes>
      </div>
    </div >
  );
}

export default observer(App);


