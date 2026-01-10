import { MenuToggle } from './modules/menuToggle.js';
import { NavigationManager } from './modules/navigationManager.js';
import { CertificateRenderer } from './modules/certificateRenderer.js';
import { certificatesData } from './modules/certificatesData.js';

document.addEventListener('DOMContentLoaded', () => {
  MenuToggle.init('menuToggle', 'navLinks');
  NavigationManager.init('.seccion', '.nav-links a', 'inicio');
  CertificateRenderer.renderCertificates(certificatesData, 'certGrid');
});
