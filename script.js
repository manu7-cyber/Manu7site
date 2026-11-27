const intro = document.getElementById('intro');
window.addEventListener('load', () => setTimeout(() => intro && intro.classList.add('done'), 1250));

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get('name')?.toString().trim() || '';
  const service = data.get('service')?.toString() || '';
  const message = data.get('message')?.toString().trim() || '';
  const text = `Hello ARK VISUALS!%0A%0AMy name is ${encodeURIComponent(name)}.%0AI'm interested in: ${encodeURIComponent(service)}.%0AProject details: ${encodeURIComponent(message || 'Please contact me to discuss.')}`;
  window.open(`https://wa.me/919079281110?text=${text}`, '_blank', 'noopener');
});