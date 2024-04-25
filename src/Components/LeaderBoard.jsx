import './LeaderBoard.css'
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
        <div className='right_box'>
            Leader Board
            <div className='top1'><span style={{ marginLeft: "-100px" }}>Top 3 student</span>
                <div className='red'>
                    <img src={user2} alt=""></img>
                 

                    <br/>
                    <br/><br/>
                    <img src={user2} alt=""></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={user2} alt=""></img>
                </div>
                <br />
                <span style={{ marginLeft: "-100px" }}>Top 15 Student List</span>

                <ul className='list'>
                    {list.map((list, index) => (
                        <li key={index} style={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", marginBottom: "10px", padding: "10px", borderRadius: "5px" }}>{list.number}&nbsp;<PiUserCircleFill />&nbsp;&nbsp; {list.name}&nbsp;&nbsp; &nbsp;&nbsp;{list.percentage}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}
export default LeaderBoard;
