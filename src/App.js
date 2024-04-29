import './App.css';
import NavBar from './Components/NavBar';
import DashBoard from './Components/DashBoard'
import LeaderBoard from './Components/LeaderBoard'
import Percentage from './Components/Percentage'
import Result from './Components/Result';


function App() {
  return (
    <div className="App" style={{ fontFamily: "Poppins, sans-serif" }}>

      <NavBar />


      <div className='w-72 shadow-md rounded-lg border border-gray-300 -mt-14'>
        <DashBoard />
      </div>

      <div className=" w-1/5  shadow-md  text-25 mt-100 ml-[1210px]" >
        <LeaderBoard />
      </div>

      <div className="  w-1/5   shadow-md   ml-[1210px] mt-10" >
        <Percentage />
      </div>

      <div className=' w-7/12 mx-80  text-25 mt-150'>
        <Result />
      </div>

    </div>

  );
}

export default App;
