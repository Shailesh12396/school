import './DashBoard.css'
import logo from '../Assets/logo.png'
import { FaJava ,FaMoneyBillAlt  } from 'react-icons/fa';
import { PiStudent } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAssignment,MdOutlineQuiz,MdLogout,MdEmojiEvents } from "react-icons/md";
import { CiTimer,CiMedicalClipboard  } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

function DashBoard() {
    const options = [
        { name: 'Attendence' , icon: <PiStudent />},
        { name: 'Fee Due' , icon: <FaMoneyBillAlt />},
        { name: 'Home Work' , icon: <IoHome />},
        { name: 'Class Work' , icon: <SiGoogleclassroom />},
        { name: 'Assignment', icon: <MdAssignment /> },
        { name: 'Time Table' , icon: <CiTimer />},
        { name: 'Result' , icon: <FaJava />},
        { name: 'School Gallery' , icon: <FaJava />},
        { name: 'Leave Application' , icon: <FaJava />},
        { name: 'Ask Doubt' , icon: <FaJava />},
        { name: 'Date Sheet' , icon: <FaJava />},
        { name: 'Events', icon: <MdEmojiEvents /> },
        { name: 'Play Quiz', icon: <MdOutlineQuiz /> },
        { name: 'Notification' , icon: <IoIosNotifications />},
        { name: 'Medical Records' , icon: <CiMedicalClipboard  />},
        { name: 'Activities' , icon: <FaJava />},
        { name: 'Broadcast Channel' , icon: <FaJava />},
        { name: 'Change Password' , icon: <FaJava />},



    ];

    return (
        <div className='box'>
            <div className='top'><img src={logo} alt=""></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metaphile Public School</div>

            <div className='bottom'><span style={{ fontSize: "25px"}}>DashBoard</span><br /><br />

                <ul className='option'>
                    {options.map((option, index) => (
                        <li key={index}><span style={{}}>{option.icon}</span>&nbsp;&nbsp; {option.name}
                        </li>
                    ))}
                </ul>
            </div>
            <br/>
            <br/>
            <button style={{fontSize: "15px",width:"120px",height:"38px",backgroundColor:"rgb(194, 251, 251)", border: "none"}} >Log out &nbsp; <MdLogout/></button>
        </div>
    )

}
export default DashBoard;
