import { useEffect, useState } from 'react';
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
import ReportPage from './components/ReportPage.jsx';

// Minimal hash router: #/report/<slug> renders a report page, anything else is home.
function useHashRoute() {
  const parse = () => {
    const m = window.location.hash.match(/^#\/report\/([\w-]+)/);
    return m ? { name: 'report', slug: m[1] } : { name: 'home' };
  };
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const onHash = () => setRoute(parse());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

export default function App() {
  const { profile, skills, projects, experience, education, live } = usePortfolio();
  const route = useHashRoute();
  const onReport = route.name === 'report';

  return (
    <>
      <MatrixCanvas />
      <CursorGlow />
      <ScrollProgress />
      <Navbar live={live} />

      {onReport ? (
        <ReportPage slug={route.slug} />
      ) : (
        <>
          <SideRails profile={profile} />
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
      )}
    </>
  );
}
