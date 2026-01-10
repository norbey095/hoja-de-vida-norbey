
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const secciones = document.querySelectorAll('.seccion');
const enlaces = document.querySelectorAll('.nav-links a');

document.getElementById('inicio').classList.add('activa');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();
    const target = enlace.dataset.target;

    secciones.forEach(sec => sec.classList.remove('activa'));

    document.getElementById(target).classList.add('activa');
    navLinks.classList.remove('active');
  });
});

const CERTIFICADOS = [
  { titulo: "Curso Java Básico - Platzi 2024", archivo: "assets/certificados/diploma-programacion-basica.pdf" },
  { titulo: "Bootcamp FullStack Angular & Java - PRAGMAPRAGMA 2024", archivo: "assets/certificados/certificado-power-Up-norbey.pdf" },
  { titulo: "Curso de Inteligencia artifical (IA)- Sapienza medellin 2025", archivo: "assets/certificados/certificado-IA-norbey.pdf" }
];

const certGrid = document.getElementById('certGrid');
CERTIFICADOS.forEach(cert => {
  const card = document.createElement('div');
  card.classList.add('cert-card');
  // make the card focusable for keyboard users
  card.tabIndex = 0;

  const link = document.createElement('a');
  link.href = cert.archivo;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `Abrir certificado ${cert.titulo} en nueva pestaña`);

  const body = document.createElement('div');
  body.classList.add('cert-body');

  const title = document.createElement('div');
  title.classList.add('cert-title');
  title.textContent = cert.titulo;

  const icon = document.createElement('div');
  icon.classList.add('cert-icon');
  icon.innerHTML = '&#x2197;'; // north east arrow as external link indicator

  body.appendChild(title);
  body.appendChild(icon);
  link.appendChild(body);
  card.appendChild(link);
  certGrid.appendChild(card);

  // Open link when pressing Enter on the card (keyboard accessibility)
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      link.click();
    }
  });
});
