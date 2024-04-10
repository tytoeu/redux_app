import logo from './logo.svg';
import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Home from './page/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
