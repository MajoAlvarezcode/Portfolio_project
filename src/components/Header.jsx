import './styles/Header.css';
import USER from '../assets/USER.png'


const styles = {
headerStyle: {
  // margin: '10px 0',
  
},
};



function Header() {
  return (
    <>
      <header className="header">

     
          <img src={USER} alt="User Logo" />

          <section>
            <h1 >ABOUT ME</h1>
         <p style={styles.headerStyle}>
  Hello! I’m Majo, an enthusiastic Industrial Designer with a growing interest in web design. My journey in the creative field began with a fascination for how design shapes our everyday lives. As an Industrial Designer, I’ve focused on creating functional and aesthetically pleasing products, guided by a strong understanding of user needs and a passion for innovation.
</p>

<p>
  Over time, I developed a deep appreciation for visual storytelling and graphic expression, which led me to explore graphic design as a way to communicate the essence and value of a product. Although I don't hold a formal degree in graphic design, I’ve continuously worked on strengthening my visual design skills, recognizing their importance in shaping user perception, narrating a product’s story, and enhancing its overall concept.
</p>

<p>
  This growing interest naturally evolved into web design—an ideal space where I can merge both my industrial design background and my graphic sensibilities. Web design has become a platform for me to combine structure, usability, and visual impact into cohesive digital experiences.
</p>

<p>
  While this portfolio focuses on my work in web and graphic design, it is rooted in my industrial design education and the multidisciplinary thinking it nurtured. I believe that embracing new challenges and expanding my skill set not only enriches my practice, but also deepens my understanding of design as a powerful and interconnected discipline.
</p>

<p>
  Thank you for visiting— I invite you to explore my work!
</p>

<p>
_This portfolio was coded in VS Code and rendered in Netlify.
</p>



          </section>
  
      </header>
    </>
  );
}

export default Header;
