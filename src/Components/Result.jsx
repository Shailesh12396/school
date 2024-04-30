import './Result.css'
import logo from '../Assets/logo.png'
import user from '../Assets/user.png'


function Result() {
    const student = [
        { rollnumber: 26, dob: '26 Aug 2006', bg: 'B', contact: "+91 8498240431", class: "2nd", fn: "Mr. Kapil Tegrwal", mn: "Mrs. Manju Mouriya" },


    ];
    return (

        <div className='flex flex-col justify-center flex-grow bg-red-300 '>
            <span >Result</span>

            <div className="  rounded-lg mt-5  shadow-xl border border-gray-300">
                <div className="flex items-center justify-center" >
                    <img src={logo} alt="" className="w-8 h-6 " />
                    <span className="text-blue-500">Metaphile Public School</span>
                </div>
                <span className="text-sm">'D' Block, Ganga Nagar, Meerut-250001</span>
                <hr className="my-3" />
                <span className="text-blue-500">PERFORMANCE PROFILE</span>
                <hr className="my-3 " />

                <div className="flex justify-center items-center">
                    <div className=" bg-slate-300 flex flex-col justify-center items-center">
                        <img src={user} alt=""  />
                        <span className="text-lg block mb-2">Mehika Tegrwal</span>
                        <span className="text-base block mb-2">Class 2nd A</span>
                    </div>

                    <div>
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

            <div className=' rounded-lg mt-12  shadow-md border border-gray-300'>
            

                <span className="text-blue-500">ATTENDENCE</span>
                <hr className="my-3" />

              
                <div className='flex justify-around text-base'>
                    <div className='term1'>
                        Term 1
                        <br/>
                        <br/>
                        <div className=' rounded-lg bg-green-200 text-green-600'>
                            235/240 Days<br />
                            Total Attendence of the student
                        </div>
                    </div>
                    <div className='term2'>
                        Term 2
                        <br/>
                        <br/>
                        <div className='  rounded-lg bg-green-200 text-green-600'>
                            235/240 Days<br />
                            Total Attendence of the student
                        </div>
                    </div>
                </div>
                <br/>
            </div>

            <div className=' rounded-lg mt-12  shadow-md border border-gray-300' >
            

                <span className="text-blue-500">ACADEMIC PERFORMANCE</span>
                <hr className="my-3" />

           
                <span >Term 1</span>


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
                <span>Term 2</span>

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
                <span >Final</span>

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
                <button className=" flex items-center justify-center mx-auto rounded-lg text-15 mt-4 w-44 h-12" style={{ backgroundColor:"rgb(194,251,251)" }} >Download &nbsp; </button>

            </div>

        </div>
    )

}
export default Result;
