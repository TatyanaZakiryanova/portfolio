import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Navbar from './components/ui/Navbar';

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default App;
