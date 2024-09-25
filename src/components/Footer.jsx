import './styles/Footer.css';
import GITHUB from '../assets/GITHUB.png';
import INSTAGRAM from '../assets/INSTAGRAM.png';
import LINKEDIN from '../assets/LINKEDIN.png';





function Footer() {

  //Function to make the mouse control de opacity of the icons when you hover it over the icons.

  const handleMouseEnter = (event) => {
    event.target.style.opacity = 1;
  };

  const handleMouseLeave = (event) => {
    event.target.style.opacity = 0.8;

  };

  return (


    <section  className="section">

      <a href='https://github.com/MajoAlvarezcode' target="_blank" rel="noopener noreferrer" >
      <img src={GITHUB} alt="GitHub Logo" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      />
      
      </a>
      <a href='https://www.instagram.com/solomajo_' target="_blank" rel="noopener noreferrer" >
      <img src={INSTAGRAM} alt="Instagram Logo" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      />
      </a>
      <a href='https://www.linkedin.com/in/maría-josé-alvarez-1aa21b305' target="_blank" rel="noopener noreferrer" >
      <img src={LINKEDIN} alt="Linkedin Logo"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      />
      </a>
    </section>
  );
}

export default Footer;