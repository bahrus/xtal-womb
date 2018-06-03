import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `xtal-womb`
 * Provide HTML Snippet that will only become part of a document later 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class XtalWomb extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'xtal-womb',
      },
    };
  }
}

window.customElements.define('xtal-womb', XtalWomb);
