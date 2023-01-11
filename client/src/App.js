import Header from './Header';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import ListTools from './ListTools';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Icon from './Images/Icon.png';

function App() {
  const [tool, setTool] = useState([]);
  
  useEffect(() => {
    const fetchTools = async () => {
      await fetch("http://66.11.118.4:5000/getTools")
        .then((res) => res.json())
        .then((tool) => {
          setTool(tool);
        });
    };
    fetchTools();
  }, []);
  if (!tool) {
    return <div className='text-center'>Loading...</div>;
  }
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          AI Compass | Central Location for AI Resources. 
        </title>
        <link rel="icon" href={Icon} />
        <meta name="description" content="AI Compass is a central location for AI resources. We provide a list of tools, tutorials, and articles to help you learn about AI." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AICompass" />
        <meta name="twitter:title" content="AI Compass | Central Location for AI Resources." />
        <meta name="twitter:description" content="AI Compass is a central location for AI resources. We provide a list of tools, tutorials, and articles to help you learn about AI." />
        <meta name="twitter:image" content="https://aicompass.com/images/ai-compass-logo.png" />
        <meta property="og:site_name" content="AI Compass" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://aicompass.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Compass | Central Location for AI Resources." />
        <meta property="og:description" content="AI Compass is a central location for AI resources. We provide a list of tools, tutorials, and articles to help you learn about AI." />
        <meta property="og:image" content="https://aicompass.com/images/ai-compass-logo.png" />
      </Helmet>
      <div className="header container mx-auto">
        <Header />
        <SearchBar searchQuery={tool} setSearchQuery={setTool} />
        <main>
        <div className="tool-list">
          <ListTools searchQuery={tool} itemsPerPage={8}/>
        </div>
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;