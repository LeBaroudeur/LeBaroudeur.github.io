import { useEffect, useState } from 'react';
import { api } from '../api.js';
import * as fallback from '../data/fallback.js';

// Loads all portfolio data from the API, falling back to embedded content
// (per-resource) if the backend is unreachable. `live` reports whether the
// API answered, so the UI can show a "connected to API" indicator.
export function usePortfolio() {
  const [data, setData] = useState({
    profile: fallback.profile,
    skills: fallback.skills,
    projects: fallback.projects,
    experience: fallback.experience,
    education: fallback.education,
  });
  const [live, setLive] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const results = await Promise.allSettled([
        api.profile(),
        api.skills(),
        api.projects(),
        api.experience(),
        api.education(),
      ]);
      if (cancelled) return;

      const [profile, skills, projects, experience, education] = results;
      const anyLive = results.some((r) => r.status === 'fulfilled');

      setData((prev) => ({
        profile: profile.status === 'fulfilled' ? profile.value : prev.profile,
        skills: skills.status === 'fulfilled' ? skills.value : prev.skills,
        projects: projects.status === 'fulfilled' ? projects.value : prev.projects,
        experience: experience.status === 'fulfilled' ? experience.value : prev.experience,
        education: education.status === 'fulfilled' ? education.value : prev.education,
      }));
      setLive(anyLive);
    })();

    return () => { cancelled = true; };
  }, []);

  return { ...data, live };
}
