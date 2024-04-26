import './App.css';
import NavBar from './Components/NavBar';
import DashBoard from './Components/DashBoard'
import LeaderBoard from './Components/LeaderBoard'
import Percentage from './Components/Percentage'
import Result from './Components/Result';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <DashBoard/>
      <LeaderBoard/>
      <Percentage/>
      <Result/>

    </div>
    // <>
    // <h1 className='text-7xl text-center text-blue-400'>Hello G</h1>
    // </>
  );
}

export default App;
