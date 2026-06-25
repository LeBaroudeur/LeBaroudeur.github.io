// Tiny API client. In dev, Vite proxies /api to the Express server.
// In production set VITE_API_URL to your deployed API origin (else relative).
const BASE = import.meta.env.VITE_API_URL || '';

async function get(path) {
  const res = await fetch(`${BASE}/api${path}`, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`GET ${path} → ${res.status}`);
  return res.json();
}

export const api = {
  profile: () => get('/profile'),
  skills: () => get('/skills'),
  projects: () => get('/projects'),
  experience: () => get('/experience'),
  education: () => get('/education'),
  contact: async (payload) => {
    const res = await fetch(`${BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
    return data;
  },
};
