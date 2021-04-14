class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Karen Isabel Sánchez Hernández`;
  }
}
customElements.define(
  "mi-footer", MiFooter);