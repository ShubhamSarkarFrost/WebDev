import React, {useState} from "react";
import styles from "./Storyteller.module.css";



const Storyteller = ({children}) =>{
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

    const totalChapters = React.Children.count(children);

    const goToNextChapter = () => {
        setCurrentChapterIndex((prevIndex) => (prevIndex + 1) % totalChapters);
    };

    const goToPreviousChapter = () => {
        setCurrentChapterIndex((prevIndex) =>
            prevIndex === 0 ? totalChapters - 1 : prevIndex - 1
        );
    };

    const currentChapter = React.Children.toArray(children)[currentChapterIndex];

    return (
        <div className={styles.storytellerContainer}>
            <h2 className={styles.storytellerTitle}>Interactive Story</h2>
            <div className={styles.chapterDisplay}>
                {currentChapter}
            </div>
            <div className={styles.navigationControls}>
                <button
                    onClick={goToPreviousChapter}
                    disabled={totalChapters <= 1}
                    className={styles.navButton}
                >
                    Previous
                </button>
                <button
                    onClick={goToNextChapter}
                    disabled={totalChapters <= 1}
                    className={`${styles.navButton} ${styles.nextButton}`} // Apply multiple classes
                >
                    Next
                </button>
                <p className={styles.chapterInfo}>Chapter {currentChapterIndex + 1} of {totalChapters}</p>
            </div>
        </div>
    );
};

export  default  Storyteller;




