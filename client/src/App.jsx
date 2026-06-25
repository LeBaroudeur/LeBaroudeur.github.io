import { usePortfolio } from './hooks/usePortfolio.js';
import MatrixCanvas from './components/MatrixCanvas.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import SideRails from './components/SideRails.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Blog from './components/Blog.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { profile, skills, projects, experience, education, live } = usePortfolio();

  return (
    <>
      <MatrixCanvas />
      <CursorGlow />
      <ScrollProgress />
      <SideRails profile={profile} />
      <Navbar live={live} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Blog projects={projects} />
        <Experience experience={experience} education={education} />
        <Contact profile={profile} live={live} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
