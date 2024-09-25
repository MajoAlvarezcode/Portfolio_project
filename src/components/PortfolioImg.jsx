import "./styles/Portfolio.css";
import React, { useState } from "react"
import KANBAN from '../assets/KANBAN.png'
import README from '../assets/README.png'




function PortfolioImg() {


  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Show the text
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Hide the text
  };

  return (
    <section className="portfolio">

      <ul className="portfolio-list">

        <div>
          <li className="portfolio-item"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="https://github.com/marioxabel/Running-tasks" target="_blank" rel="noopener noreferrer" className="portfolio-link">


              <img
                src={KANBAN}
                alt="kanban app image"
                style={{ opacity: hoveredIndex === 0 ? 0.3 : 1, transition: 'opacity 0.3s ease' }}
              />

              {hoveredIndex === 0 && <span className="link-text">Kanban app

              </span>}

            </a>
          </li>

          <li className="portfolio-item"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}>
            <a href="https://github.com/MajoAlvarezcode/Creating-Readme-files" target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img
                src={README}
                alt="Readme app image"
                style={{ opacity: hoveredIndex === 1 ? 0.3 : 1, transition: 'opacity 0.3s ease' }}
              />

              {hoveredIndex === 1 && <span className="link-text">Readme app

              </span>}

            </a>

          </li>
        </div>
        <div>
          <li className="portfolio-item"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="https://github.com/marioxabel/Running-tasks" target="_blank" rel="noopener noreferrer" className="portfolio-link">


              <img
                src={KANBAN}
                alt="kanban app image"
                style={{ opacity: hoveredIndex === 2 ? 0.3 : 1, transition: 'opacity 0.3s ease' }}
              />

              {hoveredIndex === 2 && <span className="link-text">Kanban app

              </span>}

            </a>
          </li>

          <li className="portfolio-item"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}>
            <a href="https://github.com/MajoAlvarezcode/Creating-Readme-files" target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img
                src={README}
                alt="Readme app image"
                style={{ opacity: hoveredIndex === 3 ? 0.3 : 1, transition: 'opacity 0.3s ease' }}
              />

              {hoveredIndex === 3 && <span className="link-text">Readme app

              </span>}

            </a>

          </li>
        </div>
        <div>
          <li className="portfolio-item"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="https://github.com/marioxabel/Running-tasks" target="_blank" rel="noopener noreferrer" className="portfolio-link">


              <img
                src={KANBAN}
                alt="kanban app image"
                style={{ opacity: hoveredIndex === 4 ? 0.3 : 1, transition: 'opacity 0.3s ease' }}
              />

              {hoveredIndex === 4 && <span className="link-text">Kanban app

              </span>}

            </a>
          </li>

          <li className="portfolio-item"
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}>
            <a href="https://github.com/MajoAlvarezcode/Creating-Readme-files" target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img
                src={README}
                alt="Readme app image"
                style={{ opacity: hoveredIndex === 5 ? 0.3 : 1, transition: 'opacity 0.3s ease' }}
              />

              {hoveredIndex === 5 && <span className="link-text">Readme app

              </span>}

            </a>

          </li>
        </div>




      </ul>
      <h1>PORTFOLIO</h1>
    </section>
  );
}

export default PortfolioImg;