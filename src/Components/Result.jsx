import './Result.css'
import logo from '../Assets/logo.png'
import user from '../Assets/user.png'


function Result() {
    const student = [
        { rollnumber: 26, dob: '26 Aug 2006', bg: 'B', contact: "+91 8498240431", class: "2nd", fn: "Mr. Kapil Tegrwal", mn: "Mrs. Manju Mouriya" },


    ];
    return (
        <div className="  h-550 w-55 mx-80 mt-n1770" style={{ fontFamily: "Poppins, sans-serif", marginTop: "-1770px", fontSize: "25px" }}>
            <span style={{ marginLeft: "-600px" }}>Result</span>

            <div className="h-450 w-90 rounded-lg mt-5 mx-auto shadow-xl border border-gray-300">
                <div className="flex items-center " style={{ marginLeft: "240px" }}>
                    <img src={logo} alt="" className="w-8 h-6 " />
                    <span className="text-blue-500">Metaphile Public School</span>
                </div>
                <span className="text-sm">'D' Block, Ganga Nagar, Meerut-250001</span>
                <hr className="my-3" />
                <span className="text-blue-500">PERFORMANCE PROFILE</span>
                <hr className="my-3" />

                <div className="flex profile">
                    <div className="ml-32">
                        <img src={user} alt="" className="mt-8 mb-4 ml-18" />
                        <span className="text-lg block mb-2">Mehika Tegrwal</span>
                        <span className="text-base block mb-2">Class 2nd A</span>
                    </div>

                    <div className="ml-10">
                        <ul className="student">
                            {student.map((student, index) => (
                                <li key={index} className="text-lg mb-4 grid grid-cols-2 gap-x-4 mt-6">
                                    <span>Roll Number</span>
                                    <span className="text-gray-500">{student.rollnumber}</span>
                                    <span>Date Of Birth</span>
                                    <span className="text-gray-500">{student.dob}</span>
                                    <span>Blood Group</span>
                                    <span className="text-gray-500">{student.bg}</span>
                                    <span>Contact Number</span>
                                    <span className="text-gray-500">{student.contact}</span>
                                    <span>Class</span>
                                    <span className="text-gray-500">{student.class}</span>
                                    <span>Father's Name</span>
                                    <span className="text-gray-500">{student.fn}</span>
                                    <span>Mother's Name</span>
                                    <span className="text-gray-500">{student.mn}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            <div className='h-150 w-95 rounded-lg mt-12 mx-auto shadow-md border border-gray-300'>
                <span style={{ color: "rgb(87, 174, 246)", marginTop: "15px" }}>ATTENDENCE</span>
                <hr></hr>
                <div className='flex justify-around text-base'>
                    <div className='term1'>
                        Term 1
                        <br/>
                        <br/>
                        <div className='h-16 mt-15 w-auto rounded-lg bg-green-200 text-green-600'>
                            235/240 Days<br />
                            Total Attendence of the student
                        </div>
                    </div>
                    <div className='term2'>
                        Term 2
                        <br/>
                        <br/>
                        <div className='h-16 mt-15 w-137 rounded-lg bg-green-200 text-green-600'>
                            235/240 Days<br />
                            Total Attendence of the student
                        </div>
                    </div>
                </div>
                <br/>
            </div>

            <div className=' w-95 rounded-lg mt-12 mx-auto shadow-md border border-gray-300' style={{height:"1250px"}}>

                <span style={{ color: "rgb(87, 174, 246)" }}>ACADEMIC PERFORMANCE</span>
                <hr></hr>
                <br />
                <span style={{ marginLeft: "-620px", marginTop: "25px" }}>Term 1</span>


                <div className='marks'>
                    <div class="grid-container">

                        <div className="item merge-columns">Subjects</div>
                        <div className="item1" >Total</div>
                        <div className="item2">Out of</div>

                        <div className="item merge-columns">English</div>
                        <div className="item1">100</div>
                        <div className="item2">74.6</div>
                        <div className="item merge-columns">Hindi</div>
                        <div className="item1">100</div>
                        <div className="item2">87.5</div>
                        <div className="item merge-columns">Science</div>
                        <div className="item1">100</div>
                        <div className="item2">78.9</div>
                        <div className="item merge-columns">Maths</div>
                        <div className="item1">100</div>
                        <div className="item2">83.2</div>
                        <div className="item merge-columns">Social Study</div>
                        <div className="item1">100</div>
                        <div className="item2">75.8</div>
                        <div className="item merge-columns">Drawing</div>
                        <div className="item1">100</div>
                        <div className="item2">82</div>
                        <div className="item merge-columns">Computer</div>
                        <div className="item1">100</div>
                        <div className="item2">90</div>

                        <div className="item merge-columns"></div>
                        <div className="items">GPA</div>
                        <div className="items">8.95</div>

                    </div>

                </div>

                <br />
                <span style={{ marginLeft: "-620px", marginTop: "25px" }}>Term 2</span>

                <div className='marks'>
                    <div class="grid-container">

                        <div className="item merge-columns">Subjects</div>
                        <div className="item1" >Total</div>
                        <div className="item2">Out of</div>

                        <div className="item merge-columns">English</div>
                        <div className="item1">100</div>
                        <div className="item2">74.6</div>
                        <div className="item merge-columns">Hindi</div>
                        <div className="item1">100</div>
                        <div className="item2">87.5</div>
                        <div className="item merge-columns">Science</div>
                        <div className="item1">100</div>
                        <div className="item2">78.9</div>
                        <div className="item merge-columns">Maths</div>
                        <div className="item1">100</div>
                        <div className="item2">83.2</div>
                        <div className="item merge-columns">Social Study</div>
                        <div className="item1">100</div>
                        <div className="item2">75.8</div>
                        <div className="item merge-columns">Drawing</div>
                        <div className="item1">100</div>
                        <div className="item2">82</div>
                        <div className="item merge-columns">Computer</div>
                        <div className="item1">100</div>
                        <div className="item2">90</div>

                        <div className="item merge-columns"></div>
                        <div className="items">GPA</div>
                        <div className="items">8.95</div>

                    </div>

                </div>
                <br />
                <span style={{ marginLeft: "-620px", marginTop: "25px" }}>Final</span>

                <div className='marks'>
                    <div class="grid-container">

                        <div className="item merge-columns">Subjects</div>
                        <div className="item1" >Total</div>
                        <div className="item2">Out of</div>

                        <div className="item merge-columns">English</div>
                        <div className="item1">100</div>
                        <div className="item2">74.6</div>
                        <div className="item merge-columns">Hindi</div>
                        <div className="item1">100</div>
                        <div className="item2">87.5</div>
                        <div className="item merge-columns">Science</div>
                        <div className="item1">100</div>
                        <div className="item2">78.9</div>
                        <div className="item merge-columns">Maths</div>
                        <div className="item1">100</div>
                        <div className="item2">83.2</div>
                        <div className="item merge-columns">Social Study</div>
                        <div className="item1">100</div>
                        <div className="item2">75.8</div>
                        <div className="item merge-columns">Drawing</div>
                        <div className="item1">100</div>
                        <div className="item2">82</div>
                        <div className="item merge-columns">Computer</div>
                        <div className="item1">100</div>
                        <div className="item2">90</div>

                        <div className="item merge-columns"></div>
                        <div className="items">GPA</div>
                        <div className="items">8.95</div>

                    </div>

                </div>

            </div>

            <button className="relative font-poppins text-base flex items-center justify-center mx-auto rounded-lg" style={{ backgroundColor:"rgb(194,251,251)", fontSize: "15px",marginTop: "15px", borderRadius: "10px",width: "180px",height:"50px" }} >Download &nbsp; </button>
        </div>
    )

}
export default Result;
