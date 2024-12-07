import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './container/Home';

import { Provider } from 'react-redux';
import StoreSave from './redux/StoreSave';


function App() {
  return (
  <Provider store = {StoreSave}>
    <div className="App"> 
  <Router>
    <Routes>
      <Route path='*' element = {<Home />} />

    </Routes>
  </Router>
  </div>
  </Provider>
 
  );
}

export default App;
