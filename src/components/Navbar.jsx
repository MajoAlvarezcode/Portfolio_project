import './styles/Navbar.css';



const styles = {
liStyle: {

color: 'rgb(111, 111, 111)',
fontSize: '17px',
margin: '0',
paddingLeft: '50px',

},

nameStyle: {
  textDecoration: '1.5px underline',
},

nonactiveRef: {
  color: 'rgb(111, 111, 111)',

},

activeRef: {

  color: 'rgb(28, 28, 107)',
  textDecorationLine: 'underline',

}

};



//This function helps you identify which page to move on to by underlining the title of the currentPage.

function Navbar({currentPage, handlePageChange}) {

  const getLinkStyle = (page) => {
    return currentPage === page ? styles.activeRef : styles.nonactiveRef;
  };




  return (
    <nav  className="navbar">
      <a style={styles.nameStyle}
      href="#about"
      onClick={() => handlePageChange('About')}
      
      >María José Alvarez</a>
      <ul >
        
        
        <a style={{ ...styles.liStyle, ...getLinkStyle('About') }}
        href="#about"
        onClick={() => handlePageChange('About')}
        
        >ABOUT ME</a>


        <a style={{ ...styles.liStyle, ...getLinkStyle('Portfolio') }}
        href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}

        >PORTFOLIO</a>

        <a style={{ ...styles.liStyle, ...getLinkStyle('Contact') }}
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        >CONTACT</a>


        <a style={{ ...styles.liStyle, ...getLinkStyle('Resume') }}
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        >RESUME</a>

      </ul>
    </nav>
  );
}

export default Navbar;

// style={styles.navbarStyle}