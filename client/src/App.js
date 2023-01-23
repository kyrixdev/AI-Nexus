import Header from './Header';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import ListTools from './ListTools';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Icon from './Images/Icon.png';
import WhoAreWe from './WhoAreWe';
import ContactUs from './ContactUs';
import NewsletterForm from './Newsletter';
import Footer from './footer';

function App() {
  const [tool, setTool] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    const fetchTools = async () => {
      await fetch("http://66.11.118.4:5000/getTools")
        .then((res) => res.json())
        .then((tool) => {
          setOriginalList(tool);
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
          AI Nexus | Central Location for AI Resources. 
        </title>
        <link rel="icon" href={Icon} />
        <meta name="description" content="AI Nexus is a central location for AI resources. We provide a list of tools, tutorials, and articles to help you learn about AI." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AINexus" />
        <meta name="twitter:title" content="AI Nexus | Central Location for AI Resources." />
        <meta name="twitter:description" content="AI Nexus is a central location for AI resources. We provide a list of tools, tutorials, and articles to help you learn about AI." />
        <meta name="twitter:image" content="" />
        <meta property="og:site_name" content="AI Nexus" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://aicompass.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Nexus | Central Location for AI Resources." />
        <meta property="og:description" content="AI Nexus is a central location for AI resources. We provide a list of tools, tutorials, and articles to help you learn about AI." />
        <meta property="og:image" content="https://aicompass.com/images/ai-compass-logo.png" />
      </Helmet>
      <div className="container mx-auto">
        <Header />
        <SearchBar searchQuery={tool} setSearchQuery={setTool} originalList={originalList}/>
      
        <main>
        <div className="tool-list">
          <ListTools searchQuery={tool} itemsPerPage={8}/>
        </div>
        <WhoAreWe />
        <ContactUs />
        <NewsletterForm />
        </main>
        </div>
        
        <Footer />
       
      
    </HelmetProvider>
  );
}

export default App;