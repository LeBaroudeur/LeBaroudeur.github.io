// Cursor-tracking spotlight + subtle 3D tilt for cards.
// Attach onMouseMove={onCardMove} onMouseLeave={onCardLeave} to a card element;
// the CSS reads --mx/--my (spotlight) and --tx/--ty (tilt) custom properties.
const MAX_TILT = 5; // degrees

export function onCardMove(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  el.style.setProperty('--mx', `${x}px`);
  el.style.setProperty('--my', `${y}px`);
  el.style.setProperty('--tx', `${(0.5 - y / r.height) * MAX_TILT}deg`);
  el.style.setProperty('--ty', `${(x / r.width - 0.5) * MAX_TILT}deg`);
}

export function onCardLeave(e) {
  const el = e.currentTarget;
  el.style.setProperty('--tx', '0deg');
  el.style.setProperty('--ty', '0deg');
}
