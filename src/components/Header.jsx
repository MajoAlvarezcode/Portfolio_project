import './styles/Header.css';
import USER from '../assets/USER.png'


const styles = {
headerStyle: {
  margin: '10px 0',
},
};



function Header() {
  return (
    <>
      <header className="header">

     
          <img src={USER} alt="User Logo" />

          <section>
            <h1 >ABOUT ME</h1>
            <p style={styles.headerStyle}>Hello! I’m Majo!, an enthusiastic Industrial Designer with a burgeoning passion for web design. My journey in the creative field began with a fascination for how design shapes our everyday lives. As an Industrial Designer, I’ve honed my skills in creating functional and aesthetically pleasing products, driven by a deep understanding of user needs and a commitment to innovation.</p>

              <p> Recently, I've ventured into the world of web design, eager to expand my horizons and explore new ways to express creativity. This transition has allowed me to merge my industrial design expertise with digital design principles, enabling me to craft engaging and user-friendly web experiences.</p>

              <p>My interest in the creative field is fueled by a constant desire to learn and grow. I believe that embracing new challenges and skills not only enriches my professional abilities but also broadens my perspective on design as a whole. Through this portfolio, I invite you to explore my work and witness how my journey from industrial design to web design. </p>


              <p>Thank you for visiting!</p>




          </section>
  
      </header>
    </>
  );
}

export default Header;
