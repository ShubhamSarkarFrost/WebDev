import React from 'react';
import Storyteller from './components/storyteller/storyteller';
import Chapter from './components/chapter/chapter';
import './styles/global.css'; // Import global styles if any

function App() {
    return (
        <div className="app-container"> {/* Apply a global class for overall styling */}
            <h1>My React Storybook - (children prop)</h1>
            <Storyteller>
                <Chapter
                    title="The Whispering Woods"
                    content="Deep in the Whispering Woods, a tiny squirrel named Squeaky found a mysterious glowing acorn."
                />
                <Chapter
                    title="The Glimmering Lake"
                    content="Squeaky followed the glow to the Glimmering Lake, where ancient fish swam with scales of pure light."
                />
                <Chapter
                    title="The Mountain's Secret"
                    content="Beyond the lake stood the Mountain of Echoes, rumored to hold a secret known only to the oldest trees."
                />
            </Storyteller>

            <h2 className="another-story-heading">Another Story (Example of reusability)</h2>
            <Storyteller>
                <Chapter
                    title="The Astronaut's Dream"
                    content="Leo, a young astronaut, dreamt of soaring past the moon and touching the rings of Saturn."
                />
                <Chapter
                    title="Meeting the Aliens"
                    content="On a distant planet, Leo encountered friendly aliens who taught him how to dance among the stars."
                />
            </Storyteller>
        </div>
    );
}

export default App;
