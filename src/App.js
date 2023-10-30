import React from 'react';
import './App.css'
import './components/card.css'
import { Navbar} from './view/Navbar';
import Body from './components/body';

function App() {
  return (
    <div className="main-container2">
      <div className="App">
      <Navbar />,
      <Body />
    </div>
    </div>
  );
}
export default App;
