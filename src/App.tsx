import { AboutMe, Contacts, Navbar, Projects, Section, Skills } from './components';

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Section id="about" className="min-h-[70vh]">
        <AboutMe />
      </Section>
      <Section id="skills" className="min-h-[70vh]">
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
