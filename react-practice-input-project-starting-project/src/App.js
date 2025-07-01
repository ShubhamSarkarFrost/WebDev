import React from 'react';
import Input from './components/Input/Input';

function App() {
    return (
        <div className="App">
            <div className="form-container">
                {/* Usage as described in the problem statement */}
                <Input type="text" placeholder="Your name" />
                <Input richText placeholder="Your message" />
            </div>
        </div>
    );
}

export default App;