import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { StoryLibrary } from './components/StoryLibrary';
import { StoryReader } from './components/StoryReader';
import { Characters } from './components/Characters';
import { LoreArchive } from './components/LoreArchive';
import { News } from './components/News';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { CosmicBackground } from './components/CosmicBackground';

export default function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  useEffect(() => {
    if (selectedStory !== null) {
      setCurrentSection('reader');
    }
  }, [selectedStory]);

  const handleStorySelect = (storyId: number) => {
    setSelectedStory(storyId);
  };

  const handleBackToLibrary = () => {
    setSelectedStory(null);
    setCurrentSection('library');
  };

  const renderSection = () => {
    if (currentSection === 'reader' && selectedStory !== null) {
      return <StoryReader storyId={selectedStory} onBack={handleBackToLibrary} />;
    }

    switch (currentSection) {
      case 'hero':
        return <Hero onStartReading={() => setCurrentSection('library')} />;
      case 'about':
        return <About />;
      case 'library':
        return <StoryLibrary onStorySelect={handleStorySelect} />;
      case 'characters':
        return <Characters />;
      case 'lore':
        return <LoreArchive />;
      case 'news':
        return <News />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onStartReading={() => setCurrentSection('library')} />;
    }
  };

  return (
    <div className="min-h-screen relative bg-[#0E1120] text-white overflow-x-hidden">
      <CosmicBackground />
      <Navigation 
        currentSection={currentSection} 
        onNavigate={setCurrentSection} 
      />
      <main className="relative z-10">
        {renderSection()}
      </main>
    </div>
  );
}
