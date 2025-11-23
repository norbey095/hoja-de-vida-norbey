
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
  { titulo: "Bootcamp FullStack Angular & Java - PRAGMAPRAGMA 2024", archivo: "assets/certificados/Certificado-power-Up-norbey.pdf" },
  { titulo: "Curso de Inteligencia artifical (IA)- Sapienza medellin 2025", archivo: "assets/certificados/certificado-IA-norbey.pdf" }
];

const certGrid = document.getElementById('certGrid');
CERTIFICADOS.forEach(cert => {
  const card = document.createElement('div');
  card.classList.add('cert-card');
  card.innerHTML = `<a href="${cert.archivo}" target="_blank">${cert.titulo}</a>`;
  certGrid.appendChild(card);
});
