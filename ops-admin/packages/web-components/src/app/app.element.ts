import './app.element.scss';

export class AppElement extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }
  connectedCallback() {
    this.innerHTML =
      'This text is a web component that is shared. It can be used by any app.';
  }
}
customElements.define('my-component-2', AppElement);
