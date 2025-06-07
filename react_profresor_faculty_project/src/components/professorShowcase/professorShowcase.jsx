import React, {useState} from "react";
import ProfressorCard from "../profressorCard/profressorCard";
import styles from "../professorShowcase/professorShowcase.module.css";
import professorImages from "../../resources/resources";


const professors = [
    {
        name: 'Maria Miles',
        designation: 'Maria is a professor of Computer Science at the University of Illinois.',
        email: 'maria.miles@example.com',
        image: professorImages['Maria Miles']
    },
    {
        name: 'John Doe',
        designation: 'John is an Associate Professor of Electrical Engineering at Stanford University.',
        email: 'john.doe@example.com',
        image: professorImages['John Doe']
    },
    {
        name: 'Jane Smith',
        designation: 'Jane holds a professorship in Environmental Science at UC Berkeley.',
        email: 'jane.smith@example.com',
        image: professorImages['Jane Smith']
    },
    {
        name: 'Dr. Emily White',
        designation: 'Dr. White is a distinguished Professor of History at Oxford University.',
        email: 'emily.white@example.com',
        image: professorImages['Dr. Emily White']
    }
];

const ProfessorShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentProfessor = professors[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % professors.length);
    };

    return (
        <div className={styles.professorShowouterdiv}>
            <div className={styles.professorCardContainer}>
                <ProfressorCard image={currentProfessor.image}>
                    <h2 className={styles.professorName}>{currentProfessor.name}</h2>
                    <p className={styles.professorDesignation}>{currentProfessor.designation}</p>
                    <a href={`mailto:${currentProfessor.email}`} className={styles.professorEmail}>
                        Email {currentProfessor.name.split(' ')[0]}
                    </a>
                </ProfressorCard>

                <button
                    onClick={handleNext}
                    className={styles.button}
                >
                    Next Professor
                </button>
            </div>
        </div>
    );
};

export default ProfessorShowcase;