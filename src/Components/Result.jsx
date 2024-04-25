import './Result.css'
import logo from '../Assets/logo.png'
import user from '../Assets/user.png'


function Result() {
    const student = [
        { rollnumber: 26, dob: '26 Aug 2006', bg: 'B', contact: "+91 8498240431", class: "2nd", fn: "Mr. Kapil Tegrwal", mn: "Mrs. Manju Mouriya" },


    ];
    return (
        <div className='result'>
            <span style={{ marginLeft: "-600px" }}>Result</span>

            <div className='result_card'>
                <div className='first'><img src={logo} alt=""></img>&nbsp;<span style={{ color: "rgb(87, 174, 246)" }}>Metaphile Public School</span>
                </div>
                <span style={{ fontSize: "12px" }}>'D' Block, Ganga Nagar, Meerut-250001</span>
                <hr></hr>
                <span style={{ color: "rgb(87, 174, 246)" }}>PERFORMANCE PROFILE</span>
                <hr></hr>

                <div className='profile'>
                    <div className='lefts'>
                        <img src={user} alt="" style={{ marginTop: "40px" }}></img>
                        <br />
                        <span style={{ fontSize: "20px" }}> Mehika Tegrwal</span>
                        <br />
                        <span style={{ fontSize: "17px" }}> Class 2nd A</span>
                    </div>


                    <div className='rights'>
                        <ul className='student'>
                            {student.map((student, index) => (
                                <li key={index} style={{ fontSize: "22px", marginLeft: "20px", marginTop: "10px" }}>
                                    Roll Number <span style={{ color: "grey", marginLeft: "85px" }}>{student.rollnumber}</span><br />
                                    Date Of Birth <span style={{ color: "grey", marginLeft: "78px" }}>{student.dob}</span><br />
                                    Blood Group <span style={{ color: "grey", marginLeft: "85px" }}>{student.bg}</span><br />
                                    Contact Number <span style={{ color: "grey", marginLeft: "31px" }}>{student.contact}</span><br />
                                    Class <span style={{ color: "grey", marginLeft: "160px" }}>{student.class}</span><br />
                                    Father's Name <span style={{ color: "grey", marginLeft: "60px" }}>{student.fn}</span><br />
                                    Mother's Name <span style={{ color: "grey", marginLeft: "50px" }}>{student.mn}</span><br />


                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            <div className='attendence'>
                <span style={{ color: "rgb(87, 174, 246)", marginTop: "15px" }}>ATTENDENCE</span>
                <hr></hr>
                <div className='term'>
                    <div className='term1'>
                        Term 1
                        <div className='attend1'>
                            235/240 Days<br />
                            Total Attendence of the student
                        </div>
                    </div>
                    <div className='term2'>
                        Term 2
                        <div className='attend2'>
                            235/240 Days<br />
                            Total Attendence of the student
                        </div>
                    </div>
                </div>
            </div>

            <div className='academic'>

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

<br/>
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
<br/>
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

            <button style={{marginTop:"15px",borderRadius:"10px"}} >Download &nbsp; </button>
        </div>
    )

}
export default Result;
