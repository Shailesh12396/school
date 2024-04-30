import './NavBar.css'
import logo from '../Assets/logo.png'

function NavBar() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="flex items-center shadow-md px-4 py-2  justify-between overflow-hidden rounded-lg" style={{backgroundColor:"rgb(228, 255, 255)" }}>

      <div className="flex items-center"><img src={logo} alt=""></img>&nbsp;&nbsp;&nbsp;Metaphile Public School</div>

      <ul className="bar">

        <div className="right">

          <li><a href="/">Home</a></li>
          <li><a href="#fee_due" onClick={() => scrollToSection('fee_due')}>Fee Due</a></li>
          <li><a href="#events" onClick={() => scrollToSection('events')}>Events</a></li>
          <li><a href="#exam" onClick={() => scrollToSection('exam')}>Examination</a></li>
          
        </div>
      </ul>
    </nav>
  )

}
export default NavBar;
