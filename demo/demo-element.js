import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icon.js';
import 'https://unpkg.com/tonysoft@1.53.21/iron-icons.js?module'
import '../icon-toggle.js';

class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
        }
      </style>
      
      <h3>Statically-configured icon-toggles</h3>
      <icon-toggle toggle-icon="star"></icon-toggle>
      <icon-toggle toggle-icon="star" pressed></icon-toggle>
	  <icon-toggle toggle-icon="star"></icon-toggle>
	  <icon-toggle toggle-icon="star"></icon-toggle>
	  <icon-toggle toggle-icon="star"></icon-toggle>
        
    `;
  }
  _message(fav) {
    if (fav) {
      return 'You really like me!';
    } 
    else {
      return 'Do you like me?';
    }
  }
}
customElements.define('demo-element', DemoElement);
