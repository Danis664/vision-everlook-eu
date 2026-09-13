/**
 * Presentation-only branding for the existing Vision Forever application.
 * Does not call an API, change a roster record, or touch credentials.
 */
export const FOREVER_LOGO = 'https://res.cloudinary.com/p3ijz0to/image/upload/v1789295983/vision-forever/vision-forever-goldemblem-6aa675b8.png';

export function applyForeverBranding(doc = document) {
  doc.body.classList.add('visionForeverTheme');
  doc.documentElement.lang = 'de';
  doc.querySelectorAll('.epicCrestImage').forEach(image => {
    if (image.getAttribute('src') !== FOREVER_LOGO) image.setAttribute('src', FOREVER_LOGO);
    image.removeAttribute('srcset');
    image.setAttribute('alt', 'Vision Forever – Gildenwappen');
  });
  let favicon = doc.querySelector('link[rel="icon"]');
  if (!favicon) {
    favicon = doc.createElement('link');
    favicon.rel = 'icon';
    doc.head.appendChild(favicon);
  }
  favicon.type = 'image/png';
  favicon.href = FOREVER_LOGO;
  let themeColor = doc.querySelector('meta[name="theme-color"]');
  if (!themeColor) {
    themeColor = doc.createElement('meta');
    themeColor.name = 'theme-color';
    doc.head.appendChild(themeColor);
  }
  themeColor.content = '#170e09';
}

export function startForeverBranding(doc = document) {
  const isForever = () => /forever/i.test(doc.title) || !!doc.querySelector('.foreverPage');
  let queued = false;
  const refresh = () => {
    queued = false;
    if (isForever()) applyForeverBranding(doc);
  };
  const observer = new MutationObserver(records => {
    const relevant = records.some(record => record.addedNodes.length ||
      (record.type === 'attributes' && record.target.matches?.('.epicCrestImage') &&
        record.target.getAttribute('src') !== FOREVER_LOGO));
    if (relevant && !queued) {
      queued = true;
      queueMicrotask(refresh);
    }
  });
  refresh();
  observer.observe(doc.body, {childList: true, subtree: true, attributes: true, attributeFilter: ['src']});
  return () => observer.disconnect();
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => startForeverBranding(), {once: true});
  else startForeverBranding();
}
