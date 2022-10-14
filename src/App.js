
import './App.css';
import Maindash from './Components/Maindash/Maindash';
import Rightside from './Components/Rightside/Rightside';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <div className='App'>
      <div className="appGlass">
        <Sidebar />
        <Maindash />
        <Rightside />
        
      </div>

    </div>
  );
}

export default App;
