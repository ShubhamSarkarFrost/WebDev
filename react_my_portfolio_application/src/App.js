import { useState } from "react";
import Tabs from "./Tab"
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
   const [activeTab, setActiveTab] = useState("About");

   const renderTabContent = () => {
      switch (activeTab) {
         case "About":
            return <About />;
         case "Projects":
            return <Projects />;
         case "Skills":
            return <Skills />;
         case "Contact":
            return <Contact />;
         default:
            return <About />;
      }
   };

   return (
       <div className="container">
          <img src="my-image.png" alt="Shubham image"  className="profile-image" />
          <h1 className="title">Shubham's Portfolio</h1>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="content">{renderTabContent()}</div>
       </div>
   );
}

export default App;
