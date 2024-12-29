import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Section from './components/Section';
import Skills from './components/Skills';
import Navbar from './components/ui/Navbar';

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Section id="about">
        <AboutMe />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contacts">
        <Contacts />
      </Section>
    </div>
  );
};

export default App;
