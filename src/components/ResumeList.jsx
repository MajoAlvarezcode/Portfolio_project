import React, { useState, useEffect } from 'react';
import './styles/Resume.css';
import CV from '../assets/CV.jpg';

const styles = {
    resumeStyle: {
        backgroundColor: 'rgb(247, 247, 247)',
        minHeight: '100vh',
        paddingLeft: '5%',
        paddingTop: '3%',
        paddingBottom: '30px',
        fontFamily: 'Times New Roman, Times, serif',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '5%',
        paddingRight: '5%',

    },
    ulStyle: {
        fontSize: '18px',
        paddingLeft: '10px',
        paddingTop: '10px',
    },
    liStyle: {
        color: 'rgb(28, 28, 107)',
        fontSize: '18px',
        listStyleType: 'circle',
        marginBottom: '10px',
    },
    leftColumn: {
        flex: 1,
    },
    rightColumn: {
        flex: 1,
        textAlign: 'center',
    },
    imageStyle: {
        width: '80%',
        maxWidth: '600px',
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '4px',


    },
    modalStyle: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    modalImage: {
        maxWidth: '90%',
        maxHeight: '90%',
    }
};

function ResumeList() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sectionStyle = {
        ...styles.resumeStyle,
        height: windowHeight < 768 ? 'auto' : `${windowHeight}px`,
    };

    return (
        <section style={sectionStyle}>
            <div style={styles.leftColumn}>
                <h1>RESUME</h1>

                <h3>Front-end and Proficiencies</h3>
                <ul style={styles.ulStyle}>
                    <li style={styles.liStyle}>CSS</li>
                    <li style={styles.liStyle}>JavaScript</li>
                    <li style={styles.liStyle}>JQuery</li>
                    <li style={styles.liStyle}>HTML</li>
                    <li style={styles.liStyle}>Responsive design</li>
                    <li style={styles.liStyle}>React</li>
                    <li style={styles.liStyle}>Bootstrap</li>
                </ul>

                <h3>Back-end and Proficiencies</h3>
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

                <h3>Design Tools</h3>
                <ul style={styles.ulStyle}>
                    <li style={styles.liStyle}>Figma</li>
                    <li style={styles.liStyle}>Adobe Illustrator</li>
                    <li style={styles.liStyle}>Canva</li>
                </ul>
            </div>

            <div style={styles.rightColumn}>
                <h3>Click to view CV</h3>
                <img
                    src={CV} alt="Full CV"
                    style={styles.imageStyle}
                    onClick={() => setShowModal(true)}
                />
            </div>

            {showModal && (
                <div style={styles.modalStyle} onClick={() => setShowModal(false)}>
                    <img
                        src={CV} alt="Full CV"
                        style={styles.modalImage}
                    />
                </div>
            )}
        </section>
    );
}

export default ResumeList;
