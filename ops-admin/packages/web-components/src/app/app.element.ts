export class AppElement extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }
  connectedCallback() {
    this.innerHTML = 'Copyright 2023. Microlorians.';
  }
}
customElements.define('my-component-2', AppElement);
