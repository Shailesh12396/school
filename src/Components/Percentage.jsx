
function Percentage() {

    return (
        <>
       
        <div className="border flex flex-col justify-center rounded-lg shadow-md text-18 mt-12">
            <br />
            <span >Your Percentage</span>
          
            <svg  className="mx-auto" width="200" height="200">
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

        <div className=' bg-blue-400 mt-8 text-18 flex flex-col justify-center shadow-md rounded-lg border border-gray-300 ' >
            <br />
            <span>Your Overall Performance</span>
            <span>of the Year:</span>
        <hr></hr>
        <br/>
        <span>Class Attended : <span style={{color:"blue"}}>240</span>/300</span>
        <span>Assignment Submitted : <span style={{color:"blue"}}>20</span>/25</span>
        <span>NoteBook Correction : <span style={{color:"blue"}}>12</span>/19</span>
        <span>Project Submitted : <span style={{color:"blue"}}>4</span>/5</span>
        <br/>
        </div>
        </>
    )

}
export default Percentage;
