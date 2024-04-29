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
        <div className="relative h-1000 w-1/5 shadow-md rounded-lg border border-gray-300" style={{ fontFamily: "'Poppins', sans-serif", top: "-100px" }}>
            <div className="relative flex items-center justify-between  " style={{ fontSize: "18px" }}>
                <div className="flex items-center h-170 w-85 mx-auto mt-12 ">
                    <img src={logo} alt="" className="mr-2" />
                    Metaphile Public 
                    School
                </div>
            </div>
            <br />
            <div className="h-690 rounded-lg text-base mx-auto mt-n10" style={{ fontSize: "15px",backgroundColor:"rgb(228, 255, 255)", width:"250px"}}><br/><span style={{ fontSize: "25px" }}>DashBoard</span><br /><br />

                <ul className=' list-none ' >
                    {options.map((option, index) => (
                        <li className="flex items-center p-2 "  key={index}>{option.icon}&nbsp;&nbsp; {option.name}
                        </li>
                    ))}
                </ul>
            </div>
            <br />

            <button className='relative font-poppins text-base flex items-center justify-center mx-auto rounded-lg' style={{backgroundColor:"rgb(194,251,251)", fontSize: "15px", width: "180px", height: "45px" }}>Log out &nbsp; <MdLogout /></button>
            <br />
        </div>
    )

}
export default DashBoard;
