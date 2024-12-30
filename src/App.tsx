import { AboutMe, Contacts, Navbar, Projects, Section, Skills } from './components';

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
