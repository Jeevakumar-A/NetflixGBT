
import './index.css';
import Body from './components/Body';
// import Header from './components/Header';
import { Provider } from 'react-redux';
import { Appstore } from './utils/Appstore';

function App() {
  return (
    <div className="app">
      {/* <Header/> */}
      <Provider store={Appstore}>
        <Body />
      </Provider>

    </div>
  );
}

export default App;
