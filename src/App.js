import './App.css';
import NavBar from './Components/NavBar';
import DashBoard from './Components/DashBoard'
import LeaderBoard from './Components/LeaderBoard'
import Result from './Components/Result';


function App() {

  return (
    <>
      <div className='w-full md:w-3/4 flex items-center flex-col md:flex-row justify-between'>
        <div className='w-1/5 justify-center shadow-md rounded-lg border   border-gray-300 absolute top-0 left-0 hidden md:block' style={{ fontFamily: "Poppins, sans-serif" }}>
          <DashBoard />
        </div>
      </div>

      <div className="App" style={{ fontFamily: "Poppins, sans-serif" }}>

        <div className="flex flex-col md:flex-row">
          <div className='w-full md:w-1/4'></div>
          <div className='w-full md:w-3/4'>
            <NavBar />
          </div>
        </div>


        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 "></div>

          <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-between">
            <div className=" md:w-4/6 shadow-md mt-16 text-25 overflow-auto ">
              <Result />
            </div>

            <div className=" md:w-2/6 mt-5 text-25">
              <LeaderBoard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
