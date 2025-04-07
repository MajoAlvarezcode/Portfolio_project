import React, { useState, useEffect } from "react";
import "./styles/Portfolio.css";
import KANBAN from '../assets/KANBAN.png';
import README from '../assets/README.png';
import BOOKTALK from '../assets/BOOKTALK.png';

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
    

      <ul className="portfolio-list">
        <div>
          <li className="portfolio-item">
            <a href="https://github.com/marioxabel/Running-tasks" target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img src={KANBAN} alt="kanban app image" />
            </a>
          </li>

          <li className="portfolio-item">
            <a href="https://github.com/MajoAlvarezcode/Creating-Readme-files" target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img src={README} alt="Readme app image" />
            </a>
          </li>
        </div>
        <div>
          <li className="portfolio-item">
            <a href="https://github.com/MajoAlvarezcode/Book-Search-Engine" target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img src={BOOKTALK} alt="kanban app image" />
            </a>
          </li>
        </div>
      </ul>
        {/* Condicional para mostrar u ocultar el título */}
        {isVisible && <h1>PORTFOLIO</h1>}
    </section>
  );
}

export default PortfolioImg;
