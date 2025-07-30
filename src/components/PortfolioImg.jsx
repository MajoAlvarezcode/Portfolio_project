import React, { useState, useEffect } from "react";
import "./styles/Portfolio.css";
import KANBAN from '../assets/KANBAN.png';
import README from '../assets/README.png';
import BOOKTALK from '../assets/BOOKTALK.png';
import RELOJ from '../assets/ RELOJ.jpg';
import ANNI from '../assets/ANNI.jpg'

function PortfolioImg() {
  // Estado para controlar la visibilidad del h1
  const [isVisible, setIsVisible] = useState(true);

  // useEffect para manejar el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      // Si el ancho de la ventana es menor a 1200px, ocultar el h1
      if (window.innerWidth <= 1200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Escucha de cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Llamar a handleResize al montar el componente para aplicar el estilo inicial
    handleResize();

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="portfolio">

      <div className="portfolio-columns">
        <ul className="portfolio-list">
          <li><h1>WEB PORTFOLIO</h1></li>

          <li className="portfolio-item">
            <img src={KANBAN} alt="kanban app image" />
          </li>
          <li className="portfolio-link-item">
            <a
              href="https://github.com/marioxabel/Running-tasks"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-title-link"
            >
              Running Tasks (Kanban App)
            </a>
          </li>

          <li className="portfolio-item">
            <img src={README} alt="Readme app image" />
          </li>
          <li className="portfolio-link-item">
            <a
              href="https://github.com/MajoAlvarezcode/Creating-Readme-files"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-title-link"
            >
              Creating README Files
            </a>
          </li>
          <li className="portfolio-item">
            <img src={BOOKTALK} alt="booktalk app image" />
          </li>
          <li className="portfolio-link-item">
            <a
              href="https://github.com/MajoAlvarezcode/Book-Search-Engine"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-title-link"
            >
              BookTalk Search Engine
            </a>

          </li>
        </ul>

        <ul className="portfolio-list">
          <li><h1>GRAPHIC DESIGN PORTFOLIO</h1></li>

          <li className="portfolio-item">
            <img src={RELOJ} alt="Reloj lunar image" className="right-image" />
          </li>
          <li className="portfolio-link-item">
            <a
              href="https://www.behance.net/gallery/197333457/Comit-de-Proyectos-Reloj-lunar"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-title-link"
            >
              Lunar Clock (Presskit)
            </a>
          </li>
          <li className="portfolio-item">
            <img src={ANNI} alt="Anni project image" className="right-image" />
          </li>
          <li className="portfolio-link-item">
            <a
              href="https://www.behance.net/gallery/197333063/Comit-de-Proyectos-Anni-chairs"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-title-link"
            >
              ANNI (Presskit)
            </a>
          </li>

        </ul>

      </div>
    </section>

  );
}

export default PortfolioImg;
