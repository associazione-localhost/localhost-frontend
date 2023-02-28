import './App.css';
import NavMenu from './Components/NavMenu';
import Home from './Components/Home';
import ComunityPage from './Components/ComunityPage';
import Courser from './Components/Courses';
function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Home/>
      <ComunityPage/>
      <Courser/>
    </div>
  );
}

export default App;
