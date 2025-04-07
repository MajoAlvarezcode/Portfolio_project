import React, { useState, useEffect } from 'react';
import './styles/Resume.css';

const styles = {
    resumeStyle: {
        backgroundColor: 'rgb(247, 247, 247)',
        minHeight: '100vh', // se adapta pero nunca menos que pantalla completa
        marginBottom: '0px',
        paddingLeft: '100px',
        paddingTop: '60px',
        paddingBottom: '30px', // asegúrate de que no quede espacio en blanco
        fontFamily: 'Times New Roman, Times, serif',
        overflowX: 'hidden', // importante para evitar desbordes horizontales
    },
    ulStyle: {
        fontSize: '18px',
        paddingLeft: '10px',
        paddingTop: '0px',
        paddingBottom: '0px',
    },
    liStyle: {
        color: 'rgb(28, 28, 107)',
        fontSize: '18px',
        display: 'list-item',
        listStyleType: 'circle',
        marginBottom: '0px',
        paddingBottom: '20px',
        paddingTop: '0px',
    },
};

function ResumeList() {
    // Use state to track window width
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    // Update the height on window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight); // Update height dynamically
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculate the height of the section based on the window height
    const sectionStyle = {
        ...styles.resumeStyle,
        height: windowHeight < 768 ? 'auto' : `${windowHeight}px`, // Adjust for small screens
    };

    return (
        <section style={sectionStyle}>
            <h1>RESUME</h1>

            <h2>Front-end and Proficiencies</h2>
            <ul style={styles.ulStyle}>
                <li style={styles.liStyle}>CSS</li>
                <li style={styles.liStyle}>JavaScript</li>
                <li style={styles.liStyle}>JQuery</li>
                <li style={styles.liStyle}>HTML</li>
                <li style={styles.liStyle}>Responsive design</li>
                <li style={styles.liStyle}>React</li>
                <li style={styles.liStyle}>Bootstrap</li>
            </ul>

            <h2>Back-end and Proficiencies</h2>
            <ul style={styles.ulStyle}>
                <li style={styles.liStyle}>HTML</li>
                <li style={styles.liStyle}>APIs</li>
                <li style={styles.liStyle}>Node</li>
                <li style={styles.liStyle}>Express</li>
                <li style={styles.liStyle}>MySQL, Sequelize</li>
                <li style={styles.liStyle}>MongoDB, Mongoose</li>
                <li style={styles.liStyle}>REST</li>
                <li style={styles.liStyle}>GraphQL</li>
            </ul>
        </section>
    );
}

export default ResumeList;
