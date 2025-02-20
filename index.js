// Returns an HTMLElement object created from the html string at {filePath}
async function getHTMLElementFromTemplateFile(filePath) {
  return await fetch(filePath)
    .then(res => res.text())
    .then(htmlString => {
      const dummyDiv = document.createElement('div');
      dummyDiv.innerHTML = htmlString;
      return dummyDiv.firstChild;
    });
}

// Web component definitions and declarations
class SharedHeaderElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    getHTMLElementFromTemplateFile('./templates/header/header.html')
      .then(headerElement => {
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#avoiding_documentfragment_pitfalls

        // Clone template with listener, add outer listener, inject
        const headerElementClone = headerElement.content.cloneNode(true);
        shadowRoot.appendChild(headerElementClone);
    });
  }
}

class SharedFooterElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    getHTMLElementFromTemplateFile('./templates/footer/footer.html')
      .then(footerElement => shadowRoot.appendChild(footerElement.content));
  }
}

customElements.define('shared-header', SharedHeaderElement);
customElements.define('shared-footer', SharedFooterElement);
