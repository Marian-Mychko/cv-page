import BlurBackground from './components/BlurBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import About from './components/About';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Contacts from './components/Contacts';

const App = () => {
  return (
   <>
   <BlurBackground/>
   <Navbar/>
   <main className="antialiased  overflow-x-hidden max-w-7xl mx-auto relative z-10">
    <Navbar />
    <Hero />
    <Education />
    <About />
    <Experience />
    <Skill />
    <Contacts />
   </main>
   </>
  );
};

export default App;
