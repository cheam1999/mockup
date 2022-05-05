const layoutTemplate = document.createElement('template');

layoutTemplate.innerHTML = `
<script data-main="scripts/main" src="scripts/require.js"></script>
  <style>
 
  </style>
  <body>
    <header>
      <image src="nomadrental-logo.png"></image>
      <div class="search-bar">
          <p>Choose a city</p>
          <i class="fa-solid fa-chevron-right fa-xs"></i>
      </div>
    </header>
  </body>
`;

class Layout extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    // Conditionally load FA to the component
    // if (fontAwesome) {
    //   shadowRoot.appendChild(fontAwesome.cloneNode());
    // }
    
    shadowRoot.appendChild(layoutTemplate.content);
  }
}



customElements.define('layout-component', Layout);