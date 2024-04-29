
function Percentage() {

    return (
        <>
       
        <div className="border w-full border-gray-300  rounded-lg shadow-md ">
            <br />
            <span className="-ml-28">Your Percentage</span>
            <br />
            <svg className="ml-10" width="200" height="200">
                <circle cx="100" cy="100" r="60" fill="none" stroke="#e0e0e0" stroke-width="10" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="rgb(72, 172, 87)" stroke-width="10"
                    stroke-dasharray="416.68" stroke-dashoffset="94.25" />
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="black">84%</text>
            </svg>
            Congratulations <br/>
            You are on Top 10%
            <br/>
            <br/>

        </div>

        <div className='w-full h-56 mt-8 text-base shadow-md rounded-lg border border-gray-300 ' >
            <br />
            <span>Your Overall Performance</span>
            <br/>
            <span>of the Year:</span>
        <hr></hr>
        <br/>
        <span>Class Attended : <span style={{color:"blue"}}>240</span>/300</span><br/>
        <span>Assignment Submitted : <span style={{color:"blue"}}>20</span>/25</span><br/>
        <span>NoteBook Correction : <span style={{color:"blue"}}>12</span>/19</span><br/>
        <span>Project Submitted : <span style={{color:"blue"}}>4</span>/5</span>
        </div>
        </>
    )

}
export default Percentage;
