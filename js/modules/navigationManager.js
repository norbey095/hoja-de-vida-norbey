export const NavigationManager = {
  sections: [],
  links: [],

  init(sectionSelector, linkSelector, defaultSectionId) {
    this.sections = document.querySelectorAll(sectionSelector);
    this.links = document.querySelectorAll(linkSelector);
    
    this._setActive(defaultSectionId);
    this._attachListeners();
  },

  _attachListeners() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => this._handleNavigation(e));
    });
  },

  _handleNavigation(e) {
    e.preventDefault();
    const target = e.currentTarget.dataset.target;
    this._setActive(target);
  },

  _setActive(sectionId) {
    this.sections.forEach(sec => sec.classList.remove('activa'));
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.classList.add('activa');
    }
  }
};
