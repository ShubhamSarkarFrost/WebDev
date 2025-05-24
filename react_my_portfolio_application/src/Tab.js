function Tabs({ activeTab, setActiveTab }) {
    const tabs = ["About", "Projects", "Skills", "Contact"];

    return (
        <div className="tab-buttons">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`tab-button ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

export default Tabs;