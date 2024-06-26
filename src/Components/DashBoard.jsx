import logo from '../Assets/logo.png'
import { FaJava, FaMoneyBillAlt } from 'react-icons/fa';
import { PiStudent } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAssignment, MdOutlineQuiz, MdLogout, MdEmojiEvents } from "react-icons/md";
import { CiTimer, CiMedicalClipboard } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

function DashBoard() {
    const options = [
        { name: 'Attendence', icon: <PiStudent /> },
        { name: 'Fee Due', icon: <FaMoneyBillAlt /> },
        { name: 'Home Work', icon: <IoHome /> },
        { name: 'Class Work', icon: <SiGoogleclassroom /> },
        { name: 'Assignment', icon: <MdAssignment /> },
        { name: 'Time Table', icon: <CiTimer /> },
        { name: 'Result', icon: <FaJava /> },
        { name: 'School Gallery', icon: <FaJava /> },
        { name: 'Leave Application', icon: <FaJava /> },
        { name: 'Ask Doubt', icon: <FaJava /> },
        { name: 'Date Sheet', icon: <FaJava /> },
        { name: 'Events', icon: <MdEmojiEvents /> },
        { name: 'Play Quiz', icon: <MdOutlineQuiz /> },
        { name: 'Notification', icon: <IoIosNotifications /> },
        { name: 'Medical Records', icon: <CiMedicalClipboard /> },
        { name: 'Activities', icon: <FaJava /> },
        { name: 'Broadcast Channel', icon: <FaJava /> },
        { name: 'Change Password', icon: <FaJava /> },



    ];

    return (
       
            <div  className=' h-screen overflow-auto hide-scrollbar'>
            <div  >
                <div className="flex items-center mt-10 ">
                    <img src={logo} alt=""/>
                    Metaphile Public 
                    School
                </div>
            </div>
            <br />
            <div className="w-11/12 rounded-lg mx-auto  -mt-5  text-15 " style={{ backgroundColor:"rgb(228, 255, 255)"}}><br/><span className='text-25'>DashBoard</span><br /><br />

                <ul  >
                    {options.map((option, index) => (
                        <li className="flex items-center p-2 "  key={index}>{option.icon}&nbsp;&nbsp; {option.name}
                        </li>
                    ))}
                </ul>
            </div>
            <br />

            <button className='relative  flex items-center justify-center mx-auto rounded-lg text-15 p-3' style={{backgroundColor:"rgb(194,251,251)"}}>Log out &nbsp; <MdLogout /></button>
            <br />
        </div>
    )

}
export default DashBoard;
