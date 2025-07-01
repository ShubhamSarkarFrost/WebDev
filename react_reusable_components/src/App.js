import React from 'react';
import Button from '../src/components/Button/Button';
import { Home as HomeIcon, Plus as PlusIcon } from 'lucide-react'; // Assuming you're using lucide-react for icons. Install it if not: npm install lucide-react

function App() {
    return (
        <div className="App" style={{ padding: '20px' }}>
            <h1>Creating Flexible Components</h1>
            <p>Your task is to build a highly re-usable, custom Button component that can be used in all the following ways (also see the code in the App.js file):</p>

            <h2>"Filled" mode (default):</h2>
            <Button>Default</Button>
            <br /><br />
            <Button mode="filled">Filled (Default)</Button>

            <h2>"Outline" mode:</h2>
            <Button mode="outline">Outline</Button>

            <h2>"Text-only" mode:</h2>
            <Button mode="text">Text</Button>

            <h2>With Icon:</h2>
            <Button Icon={HomeIcon}>Home</Button>
            <br /><br />
            <Button Icon={PlusIcon} mode="text">Add</Button>
        </div>
    );
}

export default App;
