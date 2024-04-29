import user2 from '../Assets/user2.png'
import { PiUserCircleFill } from "react-icons/pi";

function LeaderBoard() {
    const list = [
        { number: 4, name: 'Aditi Sharma', percentage: '84%' },
        { number: 5, name: 'Arjun Patel', percentage: '82%' },
        { number: 6, name: 'Neha Singh', percentage: '81%' },
        { number: 7, name: 'Siddharth Gupta', percentage: '80%' },
        { number: 8, name: 'Priya Verma', percentage: '77%' },
        { number: 9, name: 'Aryan Shah', percentage: '74%' },
        { number: 10, name: 'Ananya Choudhary', percentage: '72%' },
        { number: 11, name: 'Rohan Kumar', percentage: '71%' },
        { number: 12, name: 'Tanvi Reddy', percentage: '70%' },
        { number: 13, name: 'Ashok Kumar', percentage: '68%' },
        { number: 14, name: 'Aarav Desai', percentage: '66%' },
        { number: 15, name: 'Ishika Mishra', percentage: '64%' },



    ];

    return (
        
        <div className="h-1150 w-1/5  shadow-md  " style={{ marginTop: "-1000px", marginLeft: "79%", fontFamily: "Poppins, sans-serif",fontSize: "25px" }}>
            <br/>
            Leader Board
            <br />
            <br />

            <div className="text-base mt-15 w-90 mx-auto h-670 border border-gray-300 rounded-lg "><span style={{ marginLeft: "-100px" }}>Top 3 student</span>
                <div className="h-500 mt-15 flex flex-col items-center justify-center" style={{height:"300px"}}>
                    <img src={user2} alt="" className="mb-4" />

                    <div className="flex">
                        <img src={user2} alt="" className="mr-2" />
                        <img src={user2} alt="" />
                    </div>
                </div>
                <br />
                <span style={{ marginLeft: "-100px" }}>Top 15 Student List</span>
                <br />
                <br />

                <ul className='mt-15 text-base flex flex-wrap  mx-auto '>
                    {list.map((item, index) => (
                        <li key={index} className="flex items-center mb-2  px-4 py-2 rounded-md shadow-md" style={{ width: "100%" }}>
                            <span className="mr-2">{item.number}</span>
                            <PiUserCircleFill className="mr-2" />
                            <span className="mr-2">{item.name}</span>
                            <span>{item.percentage}</span>
                        </li>
                    ))}
                </ul>
                <br />
                <br />

            </div>
        </div>
    )

}
export default LeaderBoard;
