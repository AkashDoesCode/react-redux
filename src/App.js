import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import CakeContainer from './components/cakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HooksCakeContainer />
        <HooksIcecreamContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
