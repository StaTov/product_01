import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react'
import { Store } from './store/store';

const store = new Store();
export const context = createContext(store)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <context.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </context.Provider>
);


