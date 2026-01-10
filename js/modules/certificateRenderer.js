export const CertificateRenderer = {
  renderCertificates(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    data.forEach(cert => this._createCard(cert, container));
  },

  _createCard(cert, container) {
    const card = this._createElement('div', { class: 'cert-card', tabIndex: 0 });
    const link = this._createLink(cert);
    const body = this._createBody(cert);

    link.appendChild(body);
    card.appendChild(link);
    
    this._attachKeyboardListener(card, link);
    container.appendChild(card);
  },

  _createLink(cert) {
    const link = document.createElement('a');
    link.href = cert.archivo;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Abrir certificado ${cert.titulo} en nueva pestaña`);
    return link;
  },

  _createBody(cert) {
    const body = this._createElement('div', { class: 'cert-body' });
    
    const title = this._createElement('div', { class: 'cert-title' });
    title.textContent = cert.titulo;
    
    const icon = this._createElement('div', { class: 'cert-icon' });
    icon.innerHTML = '&#x2197;';

    body.appendChild(title);
    body.appendChild(icon);
    return body;
  },

  _createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'class') {
        element.classList.add(...value.split(' '));
      } else {
        element.setAttribute(key, value);
      }
    });
    return element;
  },

  _attachKeyboardListener(card, link) {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  }
};
