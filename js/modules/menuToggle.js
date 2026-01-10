export const MenuToggle = {
  init(toggleSelector, linksSelector) {
    this.toggle = document.getElementById(toggleSelector);
    this.links = document.getElementById(linksSelector);
    
    if (this.toggle && this.links) {
      this.toggle.addEventListener('click', () => this._toggleMenu());
    }
  },

  _toggleMenu() {
    this.links.classList.toggle('active');
  },

  close() {
    if (this.links) {
      this.links.classList.remove('active');
    }
  }
};
